import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DisplayAutoComponent } from './display-auto/display-auto.component';
import { DisplayAutoListComponent } from './display-auto-list/display-auto-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BuyANewCarComponent } from './buy-anew-car/buy-anew-car.component';
import { BuyAUsedCarComponent } from './buy-aused-car/buy-aused-car.component';
import { RentACarComponent } from './rent-acar/rent-acar.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'buy-anew-car',
    component: BuyANewCarComponent
  },
  {
    path: 'buy-aused-car',
    component: BuyAUsedCarComponent
  },
  {
    path: 'rent-acar',
    component: RentACarComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  { 
    path: 'display-auto-list', 
    component: DisplayAutoListComponent 
  },  
  {
    path: 'display-auto/:id',
    component: DisplayAutoComponent
  },
  { 
    path: '', 
    redirectTo: '/display-auto-list', 
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
    DisplayAutoComponent,
    DisplayAutoListComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
