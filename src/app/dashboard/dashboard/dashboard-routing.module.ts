import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  
  children: [
    
    {
      path: 'home',
      loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'about',
      loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
    },
    {
      path: 'contact',
      loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
    },
    {
      path: 'cart',
      loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
    },
  ]

},
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home',
},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
