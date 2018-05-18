import { Component, OnInit } from '@angular/core';
import { MyRemoteService } from '../app.myremoteservice';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers: [MyRemoteService]
})

export class FeedbackComponent implements OnInit {

    emailAddress: string;
    feedbackMsg: string;
    feedbackResponseMsg: string;
    feedbackResponseStatus: string;
    remoteService: MyRemoteService;

    // Since using a provider above we can receive service.
    constructor(_remoteService: MyRemoteService) {
        this.remoteService = _remoteService;
        this.emailAddress = "sample_email@gmail.com";
        this.feedbackMsg = "Please compose your message."
    }

	  ngOnInit() {
	  }

    postFeedback() {  
        // Create the JavaScript object in the format
        // required by the server.

        let EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   		let mail       = this.emailAddress;
        let msg        = this.feedbackMsg;

	    if (mail != "" &&  !EMAIL_REGEXP.test(mail)) {
	        alert("Please enter valid email address.");
	    }
	    if (msg == "") {
	        alert("Your message is not meaningful.");
	    }

        let FeedBackObject = {
            "Email": this.emailAddress,
            "Message": this.feedbackMsg
        }

        this.remoteService.postName(FeedBackObject) 
            // Subscribe to observable.
            .subscribe(
            // Success.
            data => {
                this.feedbackResponseMsg    = data["Message"];
                this.feedbackResponseStatus = data["Status"];
                console.log(data)
            },
            // Error.
            error => {
                alert(error)
            },
            // Final instructions.
            () => {
                console.log("Finished")
            });

        	this.emailAddress = "sample_email@gmail.com";
        	this.feedbackMsg = "Please compose your message."
    }

}
