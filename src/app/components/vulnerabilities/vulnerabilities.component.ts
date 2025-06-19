import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vulnerabilities',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <h1>Vulnerabilities</h1>
        </div>
      </div>
      <section class="content">
        <div class="container-fluid">
          <!-- Add your vulnerabilities content here -->
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
export class VulnerabilitiesComponent {}
