import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./dashboard/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./dashboard/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./dashboard/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'smartphones',
    loadChildren: () => import('./dashboard/smartphones/smartphones.module').then( m => m.SmartphonesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./dashboard/home/home.module').then( m => m.HomePageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
