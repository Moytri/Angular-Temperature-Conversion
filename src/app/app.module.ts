import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { routing }   from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
