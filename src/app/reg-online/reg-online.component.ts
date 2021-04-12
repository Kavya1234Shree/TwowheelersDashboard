
import { DialogDataExampleDialogComponent } from 'app/dialog-data-example-dialog/dialog-data-example-dialog.component';
import {EmployeeService} from '../app.service';
import {Headers, Response} from '@angular/http';
import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import * as xlsx from 'xlsx';



@Component({
  selector: 'app-reg-online',
  templateUrl: './reg-online.component.html',
  styleUrls: ['./reg-online.component.scss']
})
export class RegOnlineComponent implements OnInit {
userphone:any;
usernumber:any;
userVehicleNumber:any;
userWorkPreference:any;

public user:any;

  totalRec : number;
  page: number = 1;
  
  public popoverTitle: string = 'Deleting Record...';
  public popoverMessage: string = 'Are you sure to Delete ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  public phone:any;
public  vehicle_number: any;
public driver_name: any;
public driver_address: any;
public driver_city: any;
public driver_state: any;
public driver_zip: any;
public email: any;
  active: any;
  category: any;
  username: any;

  
  constructor(private httpClient:HttpClient,public matDialog: MatDialog,private serv: EmployeeService, private http:HttpClient,) { 
    this.user = new Array<any>();
  }

  ngOnInit() {
  

    let resp = this.httpClient.get("http://172.105.56.231:2390/api/drivertwo");
    resp.subscribe((data:any)=>{this.user=data})

    
        this.loadEmployee();
  }
  private loadEmployee() {
    this
        .serv
        .getEmployees()
        .subscribe((resp: Response) => {
            this.user= resp.json();
            this.totalRec = this.user.length;
            console.log(this.totalRec);
            console.log(this.page);
    
            //console.log(JSON.stringify(resp.json()));    
        });
}

refresh() {
  window.location.reload();
}
deleteRow(phone){
   console.log("phone **********",phone);
  let resp=this.httpClient.get('http://172.105.56.231:2390/api/drivertwo/delete?phone='+phone);
  resp.subscribe((data)=>this.user=data);
  // this.phone=this.user['phone']
  for(let i = 0; i < this.user.length; ++i){
      if (this.user[i].phone === phone) {
          this.user.splice(i,1);
      }
  }
}


  openModal(phone, vehicle_number, driver_name, driver_address, driver_city, driver_state, driver_zip, email, profile_photo) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    console.log("phone is ",phone)
    console.log("vehicle number is  ",vehicle_number)
   
    dialogConfig.disableClose = true;
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "800px";
    dialogConfig.width = "1000px";
    dialogConfig.data =  phone, vehicle_number, driver_name, driver_address, driver_city, driver_state, driver_zip, email, profile_photo
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(DialogDataExampleDialogComponent, dialogConfig);
  } 
 
   download() {
    let fileName = 'TwoWheelerOnlineRegistration.csv';
    let columnNames = ["Phone","Vehicle Number","Driver Name","Active","Category",];
    let header = columnNames.join(',');

    let csv = header;
    csv += '\r\n';


    this.http.get("http://172.105.56.231:2390/api/drivertwo")
    .subscribe((data:any)=>{
      data=this.user
      for(let i=0 ;i < this.user.length; ++i){
  
    this.userphone=this.user[i].phone;
  this.active=this.user[i].active;
  this.category=this.user[i].category;
  this.username=this.user[i].driver_name
 this.userVehicleNumber=this.user[i].vehicle_number;
   

    // console.log("Finalnumber",this.usernumber);
    csv += [[this.userphone] ,[this.userVehicleNumber] ,[this.username],[this.active],[ this.category]  ].join(',');
    csv += '\r\n';
    }
      // console.log("DriverData",data);
  

    var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    var link = document.createElement("a");
    if (link.download !== undefined) {
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  })
  }



}

