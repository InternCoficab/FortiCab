import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incidents',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <h1>Incidents</h1>
        </div>
      </div>
      <section class="content">
        <div class="container-fluid">
          <!-- Add your incidents content here -->
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
export class IncidentsComponent {}
