import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../components/layout/header/header.component';
// Update the import path below if the actual location is different
import { SidebarComponent } from '../../../components/layout/sidebar/sidebar.component';
import { FooterComponent } from '../../../components/layout/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {}
