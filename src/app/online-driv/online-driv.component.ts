import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-online-driv',
  templateUrl: './online-driv.component.html',
  styleUrls: ['./online-driv.component.scss']
})
export class OnlineDrivComponent implements OnInit {
  public online_info: any;
  public driver_info: any;
   constructor(private http:HttpClient) { 
      ////////online driver info//////////
 
   }
   ngOnInit() {
     let resp1= this.http.get("http://172.105.56.231:2390/api/driver-position/online-twoinfo")
 resp1.subscribe((data: any)=>{
   console.log(data);
 this.online_info= data;
 console.log(this.online_info);
   }  )
   
   }
 
 }