import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-phishing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <h1>Phishing</h1>
        </div>
      </div>
      <section class="content">
        <div class="container-fluid">
          <!-- Add your phishing content here -->
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class PhishingComponent {}
