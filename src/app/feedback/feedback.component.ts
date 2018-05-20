import { Component, OnInit } from '@angular/core';
import { MyRemoteService } from '../app.myremoteservice';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers: [MyRemoteService]
})

export class FeedbackComponent implements OnInit {

    showDiv = true;
    emailAddress: string;
    feedbackMsg: string;
    feedbackResponseMsg: string;
    feedbackResponseStatus: string;
    remoteService: MyRemoteService;

    // Since using a provider above we can receive service.
    constructor(_remoteService: MyRemoteService) {
        this.remoteService = _remoteService;
    }

    ngOnInit(){

    }


    postFeedback() {  

        //EMAIL_REGEXP is taken from stackoverflow

        let EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   		let mail       = this.emailAddress;
        let msg        = this.feedbackMsg;

	    if (mail != "" &&  !EMAIL_REGEXP.test(mail)) {
	        alert("Please enter valid email address.");
            return;
	    }
	    if (msg == "" || msg == "Please compose your message by deleting this line.") {
	        alert("Feedback message is required. Please enter your own word.");
            return;
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
                console.log(this.feedbackResponseStatus)
                console.log(data["Status"])
                if(this.feedbackResponseStatus === "Success!" ){
                    this.emailAddress = "";
                    this.feedbackMsg = "";
                    this.showDiv = !this.showDiv;
                }
                else{
                     this.showDiv = true;
                }
                
            },
            // Error.
            error => {
                alert(error)
            },
            // Final instructions.
            () => {
                console.log("Finished")
            });

          
        	
    }

}
