import { Component, OnInit } from '@angular/core';
import { MyRemoteService } from '../app.myremoteservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MyRemoteService]
})
export class HomeComponent implements OnInit {

  Operand1: string;
  result: string[];
  remoteService: MyRemoteService;
  names: Array<any>;
  resultCelsius: String;
  resultFarenhite: String;

  // Since using a provider above we can receive service.
  constructor(_remoteService: MyRemoteService) {
      this.remoteService = _remoteService;
  }

  ngOnInit() {
  }

 
    convertToF(celsius) {
        this.remoteService.getFahrenheit(celsius)
            // Subscribe to observable.
            .subscribe(
                // Success.
                data => { 
                    this.names = data
                    let farenhite = data['Fahrenheit'];
                    this.resultCelsius = celsius + " Degrees Celsius is " + farenhite + " Degrees Farenhite.";
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
