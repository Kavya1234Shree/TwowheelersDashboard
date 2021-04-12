import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-driv-regw4',
  templateUrl: './driv-regw4.component.html',
  styleUrls: ['./driv-regw4.component.scss']
})
export class DrivRegw4Component implements OnInit {

  public drivfour_info: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp1= this.http.get("http://172.105.56.231:2390/api/driver-registration/driverfour-info")
    resp1.subscribe((data: any)=>{
      console.log(data);
    this.drivfour_info= data;
    console.log(this.drivfour_info);
      }  )
  }

}