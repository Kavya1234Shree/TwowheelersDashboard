import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-accepted-orders',
  templateUrl: './accepted-orders.component.html',
  styleUrls: ['./accepted-orders.component.scss']
})
export class AcceptedOrdersComponent implements OnInit {
public picking_info: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp1= this.http.get("http://172.105.56.231:2390/api/transaction/accepted-twoinfo")
    resp1.subscribe((data: any)=>{
      console.log("accept info",data);

      
    this.picking_info= data;
    console.log(this.picking_info);
      }  )
  }

}
