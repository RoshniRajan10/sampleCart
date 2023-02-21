import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { HomePageModule } from '../home/home.module'; 
import { AboutPageModule } from '../about/about.module';
import { ContactPageModule } from '../contact/contact.module';
import { CartPageModule } from '../cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    CartPageModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
