import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-price-km',
  templateUrl: './price-km.component.html',
  styleUrls: ['./price-km.component.scss']
})
export class PriceKmComponent implements OnInit {

  detail:any;
  // vehicle_type: string;
   Base_fare: any;
    T1_price: any;
    T2_price: any;
    T3_price: any;
    T4_price: any;
    T1_km: any;
    T2_km: any;
    T3_km: any;

  constructor(private http: HttpClient,private router:Router,route :ActivatedRoute) { }

  ngOnInit() {
    let resp = this.http.get("http://165.22.219.195:2390/api/1.1/vehicle-category");
  
  resp.subscribe((data: any)=>{
  this.detail= data;


  // this.vehicle_type = data['vehicle_type']
  this.Base_fare = data['Base_fare']
  this.T1_price = data['T1_price']
  this.T2_price = data['T2_price']
  this.T3_price = data['T3_price']
  this.T4_price = data['T4_price']
  this.T1_km = data['T1_km']
  this.T2_km = data['T2_km']
  this.T3_km = data['T3_km']

});


}

onSubmit(Base_fare,T1_price,T2_price,T3_price,T4_price,T1_km,T2_km,T3_km){

  
  this.Base_fare =Base_fare;
  this.T1_price=T1_price;
  this.T2_price =T2_price;
  this.T3_price =T3_price;
  this.T4_price =T4_price;
  this.T1_km =T1_km;
  this.T2_km =T2_km;
  this.T3_km =T3_km;



                  this.http.post('http://165.22.219.195:2390/api/1.1/vehicle-category/update',{Base_fare:this.Base_fare,T1_price:this.T1_price,T2_price:this.T2_price,T3_price:this.T3_price,T4_price:this.T4_price,T1_km:this.T1_km,T2_km:this.T2_km,T3_km:this.T3_km,})
                  .subscribe((data:any)=>{
                     
                    console.log(data);
                
                    alert(data.msg);
                
                    this.router.navigate(['/dashboard']);
                
                   },(error:HttpErrorResponse)=>{
                     console.log(error);
                
                     alert("unable to update");
                   });
                  

}
}