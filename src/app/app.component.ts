import { Component }      from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';

// This component consumes the re-usable service.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyRemoteService]
})

export class AppComponent {
   title = "Converter & Feedback";

   
}
