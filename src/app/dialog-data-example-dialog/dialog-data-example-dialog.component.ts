

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {trigger, state, style, animate, transition} from '@angular/animations';
var cancelled_cheque_image2
var dl_scan_copy2

var insurance_image2
var driver_aadhar_card2
// var permit_image2
var profile_photo2
// var puc_image2
var rc_card_image2




@Component({
  selector: 'app-dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.component.html',
  styleUrls: ['./dialog-data-example-dialog.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(90deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
  ])
]
  
})
export class DialogDataExampleDialogComponent implements OnInit {
  state: string = 'default';
  state1: string = 'default';
  state2: string = 'default';
  state3: string = 'default';
  state4: string = 'default';
  state5: string = 'default';
  accountholder_name1: string | Blob;
  type_of_account1: string | Blob;
  IFSC_code1: string | Blob;
  account_no1: string | Blob;
  bank_name1: string | Blob;
  rotate() {
      this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
  rotate1() {
    this.state1 = (this.state1 === 'default' ? 'rotated' : 'default');
}
rotate2() {
  this.state2 = (this.state2 === 'default' ? 'rotated' : 'default');
}
rotate3() {
  this.state3 = (this.state3 === 'default' ? 'rotated' : 'default');
}
rotate4() {
  this.state4 = (this.state4 === 'default' ? 'rotated' : 'default');
}
rotate5() {
  this.state4 = (this.state4 === 'default' ? 'rotated' : 'default');
}
      detail: any;
      phone:any;
       vehicle_number : string;
      driver_name: string;
      driver_address: string;
      driver_city:any;
     driver_state: string;
     driver_zip: string;
     email: string;
     bank_name:any;
     account_no:any;
     IFSC_code:any;
    type_of_account:any;
     profile_photo: any;
     rc_card_image: any;
     insurance_image: any;
     dl_scan_copy: any;
     driver_aadhar_card: any;
     cancelled_cheque_image:any;
     active: any;
   
    
    
     
  constructor( private http: HttpClient,private router:Router,route :ActivatedRoute,public dialogRef: MatDialogRef<DialogDataExampleDialogComponent>,@Inject(MAT_DIALOG_DATA) public data) 
     {
    this.phone = data;  
   }

  ngOnInit() 
  { 
    let resp = this.http.get("http://172.105.56.231:2390/api/drivertwo/phone?phone="+this.phone);
  
  resp.subscribe((data: any)=>{
  this.detail= data;
 

  this.vehicle_number = data['vehicle_number']
  this.driver_name = data['driver_name']
  this.driver_address = data['driver_address']
  this.driver_city = data['driver_city']
  this.driver_zip = data['driver_zip']
  this.driver_state = data['driver_state']
  this.email = data['email']
  this.phone = data['phone']
  

  this.dl_scan_copy='http://172.105.56.231:2390/'+data['dl_scan_copy']
    // this.dl_scan_copy2 = new File([this.dl_scan_copy],"dlscan.jpg",{type:"image/jpeg"});
    this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.dl_scan_copy,'dlscan.png','image/png').then(function(file){
      console.log("ffffffffffffffffff")
      console.log(file);
      dl_scan_copy2 = file;
      console.log('gettt ingggggg',dl_scan_copy2)
  })
  
  this.driver_aadhar_card='http://172.105.56.231:2390/'+data['driver_aadhar_card']
  // this.dl_scan_copy2 = new File([this.dl_scan_copy],"dlscan.jpg",{type:"image/jpeg"});
  this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.driver_aadhar_card,'drivaadh.png','image/png').then(function(file){
    console.log("ffffffffffffffffff")
    console.log(file);
   driver_aadhar_card2 = file;
    console.log('gettt ingggggg',driver_aadhar_card2)
})
    
    

    this.insurance_image='http://172.105.56.231:2390/'+data['insurance_image']
    // this.insurance_image2 = new File([this.insurance_image],"insur.jpg",{type:"image/jpeg"});
    this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.insurance_image,'insur.png','image/png').then(function(file){
      console.log("ffffffffffffffffff")
      console.log(file);
      insurance_image2 = file;
      console.log('gettt ingggggg',insurance_image2)
  })

  

    this.profile_photo='http://172.105.56.231:2390/'+data['profile_photo']
    // this.profile_photo2 = new File([this.profile_photo],"profile.jpg",{type:"image/jpeg"});
    this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.profile_photo,'profile.png','image/png').then(function(file){
      console.log("ffffffffffffffffff")
      console.log(file);
      profile_photo2 = file;
      console.log('gettt ingggggg',profile_photo2)
  })
    
  
 

    this.rc_card_image='http://172.105.56.231:2390/'+data['rc_card_image']
    // this.rc_card_image2 = new File([this.rc_card_image],"rc.jpg",{type:"image/jpeg"});
    this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.rc_card_image,'rc.png','image/png').then(function(file){
      console.log("ffffffffffffffffff")
      console.log(file);
      rc_card_image2 = file;
      console.log('gettt ingggggg',rc_card_image2)
  })

    this.cancelled_cheque_image='http://172.105.56.231:2390/'+data['cancelled_cheque_image']
    // this.cancelled_cheque_image2 = new File([this.cancelled_cheque_image],"cancel.jpg",{type:"image/jpeg"});
    this.srcToFile('https://cors-anywhere.herokuapp.com/'+this.cancelled_cheque_image,'cancel.png','image/png').then(function(file){
      console.log("ffffffffffffffffff")
      console.log(file);
      cancelled_cheque_image2 = file;
      console.log('gettt ingggggg',cancelled_cheque_image2)
  })

        this.bank_name=data.bank_details.bank_name
        this.account_no=data.bank_details.account_no
        this.IFSC_code=data.bank_details.IFSC_code
        this.type_of_account=data.bank_details.type_of_account
        // this.accountholder_name=data.bank_details.accountholder_name

 
  console.log("regdta is ",this.detail);
 console.log(this.profile_photo);
});

}

  onprofilephotoFileChange(event) {
   this.profile_photo =<File>event.target.files[0];
    profile_photo2 = <File>event.target.files[0]
    var reader = new FileReader();
     reader.readAsDataURL(this.profile_photo); 
     reader.onload = (_event) => { 
       this.profile_photo = reader.result;
     } 
  }
  
  onDlscancopyFileChange(event) {
     this.dl_scan_copy =<File>event.target.files[0];
     dl_scan_copy2=<File>event.target.files[0];
     var reader = new FileReader();
     reader.readAsDataURL(this.dl_scan_copy); 
     reader.onload = (_event) => { 
       this.dl_scan_copy = reader.result;
  }
}
  
  onInsuranceimageFileChange(event) {
  
     this.insurance_image=<File>event.target.files[0];
     insurance_image2=<File>event.target.files[0];
     var reader = new FileReader();
     reader.readAsDataURL(this.insurance_image); 
     reader.onload = (_event) => { 
       this.insurance_image = reader.result;
  }
  }

  onRccardimageFileChange(event) {
    
     this.rc_card_image =<File>event.target.files[0];
     rc_card_image2 =<File>event.target.files[0];
    var reader = new FileReader();
     reader.readAsDataURL(this.rc_card_image); 
     reader.onload = (_event) => { 
       this.rc_card_image = reader.result;
  }
  }

  
  onDriveraadharcardFileChange(event) {
    this.driver_aadhar_card =<File>event.target.files[0];
    driver_aadhar_card2 =<File>event.target.files[0];
        var reader = new FileReader();
     reader.readAsDataURL(this.driver_aadhar_card); 
     reader.onload = (_event) => { 
       this.driver_aadhar_card = reader.result;
  }
}
onCancelledchequeimageFileChanged(event) {
  this.cancelled_cheque_image =<File> event.target.files[0];
  cancelled_cheque_image2 =<File> event.target.files[0];
  console.log( this.cancelled_cheque_image);
  var reader = new FileReader();
  reader.readAsDataURL( this.cancelled_cheque_image); 
  reader.onload = (_event) => { 
    this.cancelled_cheque_image = reader.result;
}
}
srcToFile(src, fileName, mimeType){
  return (fetch(src)
      .then(function(res){return res.arrayBuffer();})
      .then(function(buf){return new File([buf], fileName, {type:mimeType});})
  );
}

onSubmit(driver_name,email,phone,driver_address,driver_city,driver_state,driver_zip,vehicle_number,bank_name,account_no,IFSC_code,type_of_account,active)
{
  this.phone=phone;
  this.driver_name = driver_name
  this.driver_address = driver_address
  this.driver_city = driver_city
  this.driver_zip = driver_zip
  this.driver_state = driver_state
  this.email =email
  this.vehicle_number = vehicle_number
  this.bank_name1=bank_name;
this.account_no1=account_no;
this.IFSC_code1=IFSC_code;
this.type_of_account1=type_of_account;
this.profile_photo = profile_photo2
  this.rc_card_image = rc_card_image2
  this.insurance_image = insurance_image2
  this.dl_scan_copy = dl_scan_copy2
  this.driver_aadhar_card= driver_aadhar_card2
this.cancelled_cheque_image= cancelled_cheque_image2
// this.accountholder_name1=accountholder_name;
  this.active = active

  const fd = new FormData();  
                 
                  fd.append('driver_name', this.driver_name);
                  fd.append('email', this.email);
                  fd.append('phone', this.phone);
                  fd.append('driver_address', this.driver_address);
                  fd.append('driver_city',this.driver_city);
                  fd.append('driver_state', this.driver_state);
                  fd.append('driver_zip', this.driver_zip);
                  fd.append('vehicle_number', this.vehicle_number);
                  fd.append('bank_details[bank_name]',this.bank_name1);
                 fd.append('bank_details[account_no]',this.account_no1);
                 fd.append('bank_details[IFSC_code]',this.IFSC_code1);
                 fd.append('bank_details[type_of_account]',this.type_of_account1);
                 fd.append('profile_photo', this.profile_photo);
                 fd.append('dl_scan_copy', this.dl_scan_copy );
                 fd.append('driver_aadhar_card',this.driver_aadhar_card);
                 fd.append('rc_card_image', this.rc_card_image);
                 fd.append('insurance_image', this.insurance_image);
                 fd.append('cancelled_cheque_image', this.cancelled_cheque_image);
                  fd.append('active', this.active);
                  this.closeModal()
                  

  this.http.post('http://165.22.219.195:2390/api/1.0/driver-tworegistration/phone?phone='+this.phone,fd )
  .subscribe((data:any)=>{
     
    console.log(data);

    alert(data.msg);

    this.router.navigate(['/dashboard']);

   },(error:HttpErrorResponse)=>{
     console.log(error);

     alert("unable to update");
   });
 
}
  
actionFunction() {
  alert("You Have Successfully Updated Your Profile.!");
  this.closeModal();
}
closeModal() {
  this.dialogRef.close();
}

}






