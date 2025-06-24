import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { PhishingComponent } from './phishing/phishing.component';
import { VulnerabilitiesComponent } from './vulnerability/vulneravility.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard - FortiCab'
  },
  {
    path: 'incidents',
    component: IncidentsComponent,
    title: 'Incidents - FortiCab'
  },
  {
    path: 'phishing',
    component: PhishingComponent,
    title: 'Phishing - FortiCab'
  },
  {
    path: 'vulnerabilities',
    component: VulnerabilitiesComponent,
    title: 'Vulnerabilities - FortiCab'
  },
  { 
    path: '**', 
    redirectTo: 'dashboard'    // redirect all unknown routes to dashboard
  }
];
