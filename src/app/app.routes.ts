import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { PhishingComponent } from './phishing/phishing.component';
import { VulnerabilitiesComponent } from './vulnerability/vulneravility.component';


import { BlankLayoutComponent } from './shared/layouts/blank-layout/blank-layout';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./auth/pages/login/login').then(m => m.Login)
      }
    ]
  },
  {
    path: 'register',
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./auth/pages/register/register').then(m => m.Register)
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, title: 'Dashboard - FortiCab' },
      { path: 'incidents', component: IncidentsComponent, title: 'Incidents - FortiCab' },
      { path: 'phishing', component: PhishingComponent, title: 'Phishing - FortiCab' },
      { path: 'vulnerabilities', component: VulnerabilitiesComponent, title: 'Vulnerabilities - FortiCab' },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];
