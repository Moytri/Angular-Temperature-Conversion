import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';


import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'about', component: AboutComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);