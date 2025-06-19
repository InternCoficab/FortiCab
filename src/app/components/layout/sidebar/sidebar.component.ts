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
      title: 'Incidents',
      icon: 'bi-shield-exclamation',
      route: '/incidents'
    },
    {
      title: 'Phishing',
      icon: 'bi-envelope-exclamation',
      route: '/phishing'
    },
    {
      title: 'Vulnerabilities',
      icon: 'bi-bug-fill',
      route: '/vulnerabilities'
    }
  ];

  footerMenuItem = {
    title: 'Logout',
    icon: 'bi-box-arrow-right',
    route: '/logout'
  };

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    document.body.classList.toggle('sidebar-collapsed');
  }

  logout() {
    // TODO: Implement actual logout logic here
    console.log('Logging out...');
  }
}
