import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';


import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';




const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);