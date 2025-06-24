
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  template: `<router-outlet></router-outlet>`,
  imports: [RouterOutlet]
})
export class BlankLayoutComponent {}

