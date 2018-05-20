import { Component, OnInit } from '@angular/core';
import { MyRemoteService } from '../app.myremoteservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MyRemoteService]
})
export class HomeComponent implements OnInit {

  remoteService: MyRemoteService;
  names: Array<any>;
  resultCelsius: String;
  resultFahrenheit: String;

  // Since using a provider above we can receive service.
  constructor(_remoteService: MyRemoteService) {
      this.remoteService = _remoteService;
  }

  ngOnInit() {
  }

    convertToC(fahrenheit) {
        this.remoteService.getCelsius(fahrenheit)
            // Subscribe to observable.
            .subscribe(
                // Success.
                data => { 
                    this.names = data
                    let celsius = data['Celsius'];
                    this.resultFahrenheit = fahrenheit + " Degrees Fahrenheit is " + Number(celsius).toFixed(2)+ " Degrees Celsius.";
                    let y = 0;
                },
                // Error.
                error => {
                    alert(error)
                },
                // Final Instructions.
                () => {
                    console.log("Finished")
                });
    }
 
    convertToF(celsius) {
        this.remoteService.getFahrenheit(celsius)
            // Subscribe to observable.
            .subscribe(
                // Success.
                data => { 
                    this.names = data
                    let fahrenheit = data['Fahrenheit'];
                    this.resultCelsius = celsius + " Degrees Celsius is " + Number(fahrenheit).toFixed(2) + " Degrees Fahrenheit.";
                    let y = 0;
                },
                // Error.
                error => {
                    alert(error)
                },
                // Final Instructions.
                () => {
                    console.log("Finished")
                });
    }



}
