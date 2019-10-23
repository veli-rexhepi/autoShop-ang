import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DisplayAutoComponent } from './display-auto/display-auto.component';
import { DisplayAutoListComponent } from './display-auto-list/display-auto-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
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
