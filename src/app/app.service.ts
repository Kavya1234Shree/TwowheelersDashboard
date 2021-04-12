import { Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
 
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { CommonModule } from '@angular/common'; 
@Injectable()
export class EmployeeService {
//the URL of the REST API
private servUrl = "http://172.105.56.231:2390/api/drivertwo";
constructor(private http: Http) { }
//method to get all employee
getEmployees(): Observable<Response> {
    return this.http.get(this.servUrl);
}
}