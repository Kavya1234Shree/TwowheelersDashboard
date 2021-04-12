import { Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
 
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { CommonModule } from '@angular/common'; 
@Injectable()
export class EmployeeServices {
//the URL of the REST API
private serviUrl = "http://172.105.56.231:2390/api/driver-registration/twowhldriver-active";
constructor(private http: Http) { }
//method to get all employee
getEmployeess(): Observable<Response> {
    return this.http.get(this.serviUrl);
}
}