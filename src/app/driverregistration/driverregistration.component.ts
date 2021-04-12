import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-driverregistration',
  templateUrl: './driverregistration.component.html',
  styleUrls: ['./driverregistration.component.scss']
})
export class DriverregistrationComponent implements OnInit {
 
   selectedFile: File = null;
   onFileChanged(event) {
      this.selectedFile =<File> event.target.files[0];
   }
   dlscancopyFile: File = null;
   onDlscancopyFileChanged(event) {
      this.dlscancopyFile =<File> event.target.files[0];
   }
   insuranceimageFile: File = null;
   onInsuranceimageFileChanged(event) {
      this.insuranceimageFile=<File> event.target.files[0];
   }
 
 rccardimageFile: File = null;
   onRccardimageFileChanged(event) {
      this.rccardimageFile =<File> event.target.files[0];
   }
 
   driveraadharcardFile: File = null;
   onDriveraadharcardFileChanged(event) {
      this.driveraadharcardFile =<File> event.target.files[0];
   }

   cancelledchequeimageFile: File = null;
   onCancelledchequeimageFileChanged(event) {
      this.cancelledchequeimageFile =<File> event.target.files[0];
   }
 
 

 driver_name: string ='';
 email:string='';
 phone1:string='';
 driver_address1:string ='';
 driver_city1:string ='';
 driver_state1:string ='';
 driver_zip1:string='';
 vehicle_number1:string='';
 bank_name1:string='';
account_no1:string='';
IFSC_code1:string='';
type_of_account1:string='';
// accountholder_name1:string='';
 active1:string='';
 
 
 
   constructor(private http:HttpClient,private router:Router, route :ActivatedRoute) { }

   accounts=[
      {id : "Savings",  name:"Savings"},
      {id :"Current" ,name:"Current"},
      ]
   
 
   ngOnInit() {
 
   }
   onDriver(driver_name,email,phone,driver_address,driver_city,driver_state,driver_zip,vehicle_number,bank_name,account_no,IFSC_code,type_of_account,active){

      if( this.driver_name==""){
         
         alert("Please Enter drivername"); 
       }
       
       if(this.email==""){
          alert("Please Enter Email"); 
  
        }
       // else if(this.email!==""){
       //    alert("Please enter Valid Email"); 
  
       //  }
 
     
       else{
    
                      this.driver_name=driver_name;
                      this.email=email;
                      this.phone1=phone;
                      this.driver_address1= driver_address;
                      this.driver_city1= driver_city;
                      this.driver_state1=driver_state;
                      this.driver_zip1=driver_zip;
                      this.vehicle_number1=vehicle_number;
                      this.bank_name1=bank_name;
                     this.account_no1=account_no;
                     this.IFSC_code1=IFSC_code;
                     this.type_of_account1=type_of_account;
                     // this.accountholder_name1=accountholder_name;
                     this.active1=active;
                    
                     
                    
 
                      
                   const fd = new FormData();  
                  
                   fd.append('driver_name', this.driver_name);
                   fd.append('email', this.email);
                   fd.append('phone', this.phone1);
                   fd.append('driver_address', this.driver_address1);
                   fd.append('driver_city', this.driver_city1);
                   fd.append('driver_state', this.driver_state1);
                   fd.append('driver_zip', this.driver_zip1);
                   fd.append('profile_photo', this.selectedFile, this.selectedFile.name);
                   fd.append('dl_scan_copy',this.dlscancopyFile,this.dlscancopyFile.name);
                   fd.append('driver_aadhar_card', this.driveraadharcardFile, this.driveraadharcardFile.name);
                   fd.append('rc_card_image', this.rccardimageFile, this.rccardimageFile.name);
                   fd.append('insurance_image', this.insuranceimageFile, this.insuranceimageFile.name);
                   fd.append('cancelled_cheque_image', this.cancelledchequeimageFile, this.cancelledchequeimageFile.name);
                   fd.append('vehicle_number', this.vehicle_number1);
                   fd.append('bank_details[bank_name]',this.bank_name1);
                  fd.append('bank_details[account_no]',this.account_no1);
                  fd.append('bank_details[IFSC_code]',this.IFSC_code1);
                  fd.append('bank_details[type_of_account]',this.type_of_account1);
                  // fd.append('bank_details[accountholder_name]',this.accountholder_name1);
                   fd.append('active', this.active1);
              
                      this.http.post('http://165.22.219.195:2390/api/1.0/driver-tworegistration',fd)
 
                      .subscribe((data:any)=>{
                         
                      console.log(data);
 
                      alert("successfully Register");
 
                      },(error:HttpErrorResponse)=>{
                         console.log(error);
                         alert(error.error.text);
                      });
                   
                     }   
       }
 
   
 }