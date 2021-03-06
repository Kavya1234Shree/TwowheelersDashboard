import { Component, OnInit, Inject } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-moversdialog',
  templateUrl: './moversdialog.component.html',
  styleUrls: ['./moversdialog.component.scss']
})
export class MoversdialogComponent implements OnInit {
  detail: any;
  movpck_uuid: string;
  customer_uuid: any;
  pick_up_address: any;
  type_of_packages: any;
  distance: any;  
  order_time: any;
  duration: any;
  name: any;
  phone: any;
  address: any;
  landmark: any;
  status:any;
  PubNub: PubNubAngular;
  public popoverTitle: string = 'cancel';
  public popoverMessage: string = 'Are you sure want to cancel this order ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  disableBtn: boolean=true;
  disableBtn1: boolean=true;
  order_time1: string;
  completed_time: any;
  completed_time1: string;
  cancelled_time: any;
  cancelled_time1: string;
  constructor( private http: HttpClient,pubnub: PubNubAngular,
    public dialogRef: MatDialogRef<MoversdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.movpck_uuid = data; 
      
      pubnub.init({
        publishKey: "pub-c-3a4ebe99-3c6d-4524-a59f-8e2a16bd63d3",
      subscribeKey: "sub-c-a84a5ce4-26fa-11ea-95be-f6a3bb2caa12",
      secretKey: "sec-c-ZGUzMmI4MmYtYjQyZC00ZjY3LWI5MzEtZWRhNDM5Y2I3Yjk5"
        
        });
     this.PubNub = pubnub
    }

    ngOnInit() {
     
      let resp1= this.http.get("http://172.105.56.231:2390/api/moverspackers/id?movpck_uuid="+this.movpck_uuid)
      resp1.subscribe((data: any)=>{
        this.detail= data
        this.name=data.contact_person.name//  console.log("Name",this.name)
        this.phone= data.contact_person.phone
        this.customer_uuid= data['customer_uuid']
        this.address= data.delivery_address.address
        this.landmark=data.delivery_address.landmark
        this.pick_up_address= data['pick_up_address']
         this.type_of_packages= data['type_of_packages']
         this.distance= data['distance']
         this.order_time= data['order_time']
         this.order_time1 = new Date(this.order_time).toString();
         this.completed_time=data['completed_time']
         this.completed_time1 = new Date(this.completed_time).toString()  ;
         this.cancelled_time=data['cancelled_time']
         this.cancelled_time1 = new Date(this.cancelled_time).toString()  ;
        this.duration= data['duration']
         this.movpck_uuid=data['movpck_uuid']    
         this.status=data['status']
         if(this.status=='cancelled'||this.status=='completed'){
          this.disableBtn=false;
          this.disableBtn1=false;
         }
        });
  
 
  }
    cancel() {
      this.PubNub.publish(
        {
          message: {"id": this.movpck_uuid,
                     "cust_id":this.customer_uuid},
              channel: 'movers_cancel'
          },
          (status, response) => {
              if (status.error) {
                  console.log(status);
              } else {
                  console.log('message Published w/ timetoken', response.timetoken);
                  this.refresh();
              }
          }
      );
    }
    complete() {
      this.PubNub.publish(
        {
          message: {"id": this.customer_uuid,
                     "cust_id":this.customer_uuid},
              channel: 'movers_complete'
          },
          (status, response) => {
              if (status.error) {
                  console.log(status);
              } else {
                  console.log('message Published w/ timetoken', response.timetoken);
                  this.refresh();
              }
          }
      );
    }
    refresh() {
      window.location.reload();
    }
    
    closeModal() {
      this.dialogRef.close();
    }
  }
  
