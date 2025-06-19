import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ChatMessage {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
  avatar: string;
  isOwn: boolean;
}

export interface ChatContact {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messages = new BehaviorSubject<ChatMessage[]>([
    {
      id: 1,
      sender: 'Alexander Pierce',
      message: 'Is this template really for free? That\'s unbelievable!',
      timestamp: '23 Jan 2:00 pm',
      avatar: 'assets/img/users/user1-128x128.jpg',
      isOwn: false
    },
    {
      id: 2,
      sender: 'Sarah Bullock',
      message: 'You better believe it!',
      timestamp: '23 Jan 2:05 pm',
      avatar: 'assets/img/users/user3-128x128.jpg',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Alexander Pierce',
      message: 'Working with AdminLTE on a great new app! Wanna join?',
      timestamp: '23 Jan 5:37 pm',
      avatar: 'assets/img/users/user1-128x128.jpg',
      isOwn: false
    },
    {
      id: 4,
      sender: 'Sarah Bullock',
      message: 'I would love to.',
      timestamp: '23 Jan 6:10 pm',
      avatar: 'assets/img/users/user3-128x128.jpg',
      isOwn: true
    }
  ]);

  private contacts = new BehaviorSubject<ChatContact[]>([
    {
      id: 1,
      name: 'Count Dracula',
      avatar: 'assets/img/users/user1-128x128.jpg',
      lastMessage: 'How have you been? I was...',
      lastMessageDate: '2/28/2023'
    },
    {
      id: 2,
      name: 'Sarah Doe',
      avatar: 'assets/img/users/user7-128x128.jpg',
      lastMessage: 'I will be waiting for...',
      lastMessageDate: '2/23/2023'
    }
  ]);

  getMessages(): Observable<ChatMessage[]> {
    return this.messages.asObservable();
  }

  getContacts(): Observable<ChatContact[]> {
    return this.contacts.asObservable();
  }

  sendMessage(message: string): void {
    const newMessage: ChatMessage = {
      id: this.messages.value.length + 1,
      sender: 'Sarah Bullock',
      message: message,
      timestamp: new Date().toLocaleString(),
      avatar: 'assets/img/users/user3-128x128.jpg',
      isOwn: true
    };
    this.messages.next([...this.messages.value, newMessage]);
  }
}
