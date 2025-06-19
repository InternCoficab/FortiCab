import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, ChatMessage, ChatContact } from '../../../services/chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card direct-chat direct-chat-primary mb-4">
      <div class="card-header">
        <h3 class="card-title">Direct Chat</h3>
        <div class="card-tools">
          <span title="3 New Messages" class="badge text-bg-primary">3</span>
          <button type="button" class="btn btn-tool" (click)="toggleCollapse()">
            <i class="bi" [ngClass]="{'bi-dash-lg': !isCollapsed, 'bi-plus-lg': isCollapsed}"></i>
          </button>
          <button type="button" class="btn btn-tool" (click)="toggleContacts()">
            <i class="bi bi-chat-text-fill"></i>
          </button>
          <button type="button" class="btn btn-tool" (click)="removeCard()">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
      <div class="card-body" *ngIf="!isCollapsed">
        <div class="direct-chat-messages" [class.d-none]="showContacts">
          <div *ngFor="let message of messages" 
               class="direct-chat-msg" 
               [class.end]="message.isOwn">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name" [class.float-start]="!message.isOwn" [class.float-end]="message.isOwn">
                {{message.sender}}
              </span>
              <span class="direct-chat-timestamp" [class.float-end]="!message.isOwn" [class.float-start]="message.isOwn">
                {{message.timestamp}}
              </span>
            </div>
            <img class="direct-chat-img" [src]="message.avatar" [alt]="message.sender">
            <div class="direct-chat-text">
              {{message.message}}
            </div>
          </div>
        </div>
        <div class="direct-chat-contacts" [class.d-none]="!showContacts">
          <ul class="contacts-list">
            <li *ngFor="let contact of contacts">
              <a href="#">
                <img class="contacts-list-img" [src]="contact.avatar" [alt]="contact.name">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    {{contact.name}}
                    <small class="contacts-list-date float-end">{{contact.lastMessageDate}}</small>
                  </span>
                  <span class="contacts-list-msg">{{contact.lastMessage}}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-footer" *ngIf="!isCollapsed">
        <form (ngSubmit)="sendMessage()">
          <div class="input-group">
            <input type="text" 
                   name="message" 
                   placeholder="Type Message ..." 
                   class="form-control"
                   [(ngModel)]="newMessage">
            <span class="input-group-append">
              <button type="submit" class="btn btn-primary">Send</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: ChatMessage[] = [];
  contacts: ChatContact[] = [];
  newMessage: string = '';
  isCollapsed: boolean = false;
  showContacts: boolean = false;
  isRemoved: boolean = false;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe(messages => {
      this.messages = messages;
    });

    this.chatService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleContacts() {
    this.showContacts = !this.showContacts;
  }

  removeCard() {
    this.isRemoved = true;
  }
}
