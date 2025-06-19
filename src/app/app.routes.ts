import { Routes } from '@angular/router';
import { Home } from './front/home/home';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: '**', redirectTo: '' }           // redirect all unknown routes to home
];
