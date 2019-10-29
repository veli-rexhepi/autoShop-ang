import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { BuyANewCarComponent } from './components/buy-a-new-car/buy-a-new-car.component';
import { BuyAUsedCarComponent } from './components/buy-a-used-car/buy-a-used-car.component';
import { RentACarComponent } from './components/rent-a-car/rent-a-car.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'buy-a-new-car',
    component: BuyANewCarComponent
  },
  {
    path: 'buy-a-used-car',
    component: BuyAUsedCarComponent
  },
  {
    path: 'rent-a-car',
    component: RentACarComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },   
  // {
  //   path: 'display-auto/:id',
  //   component: DisplayAutoComponent
  // },
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    BuyANewCarComponent,
    BuyAUsedCarComponent,
    RentACarComponent,
    ContactComponent,    
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
