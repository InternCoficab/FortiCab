import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = false;
  menuItems = [
    {
      title: 'Dashboard',
      icon: 'bi-speedometer2',
      route: '/dashboard',
      active: true
    },
    {
      title: 'Users',
      icon: 'bi-people',
      route: '/users'
    },
    {
      title: 'Reports',
      icon: 'bi-file-earmark-text',
      route: '/reports'
    },
    {
      title: 'Settings',
      icon: 'bi-gear',
      route: '/settings'
    }
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    document.body.classList.toggle('sidebar-collapsed');
  }
}
