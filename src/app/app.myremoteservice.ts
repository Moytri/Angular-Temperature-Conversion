import { Injectable }     from '@angular/core';
import { Component }      from '@angular/core';
import {URLSearchParams, QueryEncoder} from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

 
@Injectable()
export class MyRemoteService {

     // The site is actually calling my web server.
    // I had to replace localhost with the URL of my site.
    public site:string;
    constructor(private http: Http) { 
       this.site = "http://ssdsandbox.com/angular2/"
    }

    getFahrenheit(celsius): Observable<string[]> {
        let content = new URLSearchParams();

        /**Convert celsius to farenhite**/
        let fahrenheit = (celsius * (9/5)) + 32;

        content.set('c',  celsius);
        let headers = new Headers({ 
        'Content-Type': 'application/x-www-form-urlencoded' }); 
        let options = new RequestOptions({
          search: content 
        });

        let dataUrl = this.site + 'api/Fahrenheit';  
        return this.http.get(dataUrl, options)
            .pipe(map(this.extractData))
            .pipe(catchError(this.handleError));

    }


    postName(_feedback: Object): Observable<Comment[]> {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
        let options = new RequestOptions({ headers: headers });
        let url     = this.site + '/feedback';

        let params: URLSearchParams = new URLSearchParams();

        let content = new URLSearchParams();
        content.set('Email',  _feedback["Email"]);
        content.set('Message', _feedback["Message"]);  
        alert(url + " content.toString() " + content.toString())
        return this.http.post(url, content.toString(), options)
            .pipe(map(this.extractData))
            .pipe(catchError(this.handleError));
    } 

     // Retreival of JSON from .NET is a success.
    private extractData(res: Response) { 
        let body = res.json();
        return JSON.parse(body); 
    }


    // An error occurred. Notify the user.
    private handleError(error: any) {
        return throwError(JSON.stringify(error))
    }

}