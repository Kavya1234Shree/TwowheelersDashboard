import { EmployeeServices } from './../active.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {Headers, Response} from '@angular/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FourActiveDialogComponent } from 'app/four-active-dialog/four-active-dialog.component';
import { PubNubAngular } from 'pubnub-angular2';


@Component({
  selector: 'app-activefour',
  templateUrl: './activefour.component.html',
  styleUrls: ['./activefour.component.scss']
})
export class ActivefourComponent implements OnInit {

  public user:any;
  totalRec : number;
  page: number = 1;
  PubNub: PubNubAngular;

  public popoverTitle: string = 'DeActivating...';
  public popoverMessage: string = 'Are you sure want to Deactivate this Driver ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  constructor(private httpClient:HttpClient,public matDialog: MatDialog,private servi: EmployeeServices,pubnub: PubNubAngular) { 
    this.user = new Array<any>();

    pubnub.init({
      publishKey: "pub-c-0b53f37e-3b8a-4865-917e-c14f5aaf50d0",
      subscribeKey: "sub-c-0c3b58dc-aed9-11ea-adee-16aa024ec639",
      secretKey: "sec-c-ZDkyMmU1YmItZGI0Zi00ZDQzLWE4MTEtN2I0MTNkMTBmMWQ5"
      
      
      
      });
   this.PubNub = pubnub
  
  }

  ngOnInit() {

    let resp = this.httpClient.get("http://172.105.56.231:2390/api/driver-registration/twowhldriver-active");
    resp.subscribe((data)=>this.user=data);

    console.log('gggg');
        this.loadEmployee();
  }
  private loadEmployee() {
    this
        .servi
        .getEmployeess()
        .subscribe((resp: Response) => {
            this.user= resp.json();
            this.totalRec = this.user.length;
            console.log(this.totalRec);
            console.log(this.page);
    
            
        });
}
deactivateDriv(driver_uuid) {
  console.log(driver_uuid)
  this.PubNub.publish(
    {
      message: {Driver: driver_uuid},
          channel: 'Deactivating'
      },
      (status, response) => {
          if (status.error) {
              console.log(status);
          } else {
              console.log('message Published w/ timetoken', response.timetoken);
              this.refresh()
          }
      }
  );
}

refresh() {
  window.location.reload();
}

// deleteRow(phone){
//   console.log("phone **********",phone);
//  let resp=this.httpClient.get('https://cors-anywhere.herokuapp.com/https://apis.zeiger.tech/api/driverfour-owner/delete?phone='+phone);
//  resp.subscribe((data)=>this.user=data);
//  // this.phone=this.user['phone']
//  for(let i = 0; i < this.user.length; ++i){
//      if (this.user[i].phone === phone) {
//          this.user.splice(i,1);
//      }
//  }
// }
  openModal(phone,vehicle_number,work_preference,cancelled_cheque_image) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    console.log("phone is ",phone)
    console.log("vehicle number is  ",vehicle_number)
    console.log("wprkong is",work_preference)
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "1000px";
    dialogConfig.width = "1100px";
    dialogConfig.data = phone,vehicle_number,work_preference,cancelled_cheque_image;
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(FourActiveDialogComponent, dialogConfig);
  } 
 
}

