import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offline-driv',
  templateUrl: './offline-driv.component.html',
  styleUrls: ['./offline-driv.component.scss']
})
export class OfflineDrivComponent implements OnInit {

  public offline_info: any;
  public driver_info: any;
   constructor(private http:HttpClient) { 
      ////////offline driver info//////////
 
   }
   ngOnInit() {
     let resp1= this.http.get("http://172.105.56.231:2390/api/driver-position/offline-twoinfo")
 resp1.subscribe((data: any)=>{
   console.log(data);
 this.offline_info= data;
 console.log(this.offline_info);
   }  )
   
   }

}

