
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'register',
    loadComponent: () => import('../shared/layouts/blank-layout/blank-layout.component').then(m => m.BlankLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/register/register').then(m => m.Register)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
