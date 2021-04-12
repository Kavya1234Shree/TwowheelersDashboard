import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  selector: 'app-nodrivdialog',
  templateUrl: './nodrivdialog.component.html',
  styleUrls: ['./nodrivdialog.component.scss']
})
export class NodrivdialogComponent implements OnInit {
  PubNub: PubNubAngular;

  public popoverTitle: string = 'cancel';
  public popoverMessage: string = 'Are you sure want to cancel this order ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  detail: any;
  trans_uuid:any;
  customer_uuid: any;
  pick_up_address: any;
  duration: any;
  type_of_packages: any;
  amount: any;
  distance: any;
  selectchildvehical: any;
  approximate_amount: any;
  pod: any;
  name: any;
  phone: any;
  landmark: any;
  address: any;
  order_time: any;
  order_time1: string;
 constructor( private http: HttpClient,pubnub: PubNubAngular,
    public dialogRef: MatDialogRef<NodrivdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.trans_uuid = data; 
      // console.log("id",this.FourIntr_uuid)


      pubnub.init({
        publishKey: "pub-c-0b53f37e-3b8a-4865-917e-c14f5aaf50d0",
        subscribeKey: "sub-c-0c3b58dc-aed9-11ea-adee-16aa024ec639",
        secretKey: "sec-c-ZDkyMmU1YmItZGI0Zi00ZDQzLWE4MTEtN2I0MTNkMTBmMWQ5"
        
        
        });
        this.PubNub = pubnub


    }

    ngOnInit() {
     
      let resp1= this.http.get("http://172.105.56.231:2390/api/nodriver/id?trans_uuid="+this.trans_uuid)
      resp1.subscribe((data: any)=>{
        this.detail= data

        console.log("data1",this.detail)
        this.trans_uuid= data['trans_uuid']
        this.customer_uuid= data['customer_uuid']
         this.pick_up_address= data['pick_up_address']
         this.duration= data['duration']
         this.type_of_packages= data['type_of_packages']
        this.amount= data['amount']
         this.distance=data['distance']
         this.selectchildvehical= data['selectchildvehical']
         this.approximate_amount= data['approximate_amount']
         this.pod= data['pod']
         this.order_time= data['order_time']
         this.order_time1 = new Date(this.order_time).toString();
         this.name=data.contact_person.name
         console.log("Name",this.name)
         this.phone= data.contact_person.phone
         this.address= data.delivery_address.address
         this.landmark=data.delivery_address.landmark
        });
  
  
    }
    reassigndriv(trans_uuid) {
      console.log(trans_uuid)
      this.PubNub.publish(
        {
          message: {Complete: trans_uuid},
              channel: 'reassign'
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
    refresh(){
      window.location.reload(); 
    }
    closeModal() {
      this.dialogRef.close();
    }
  }
  
