import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class CalendarService {
    
    constructor(private http: Http) {}

    ngOnInit() {
    }
  
    private getEventbriteCalendar(){
        let _url = 'https://eventbrite-api.now.sh/';
        let headers = new Headers({ 'Content-Type': 'application/json' } );
        let _options = new RequestOptions({ headers: headers });
        return this.http.get(_url).first().map(res => res.json())
    }
        
    private getMeetupCalendar(){
        let _url = 'https://meetup-api.now.sh';
        let headers = new Headers({ 'Content-Type': 'application/json' } );
        let _options = new RequestOptions({ headers: headers });
            return this.http.get(_url).first().map(res => res.json())
    }

    private getSpreadsheetCalendar(){
        let _url = 'https://spreadsheet-api.now.sh/';
        let headers = new Headers({ 'Content-Type': 'application/json' } );
        let _options = new RequestOptions({ headers: headers });
              return this.http.get(_url).first().map(res => res.json())
    }

    getCalendar() {
        return Observable.forkJoin(
            this.getEventbriteCalendar(),
            this.getMeetupCalendar(),
            this.getSpreadsheetCalendar()
        );
    }

}
