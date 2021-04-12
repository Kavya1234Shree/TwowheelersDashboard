import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fourwheeleroutstation',
  templateUrl: './fourwheeleroutstation.component.html',
  styleUrls: ['./fourwheeleroutstation.component.scss']
})
export class FourwheeleroutstationComponent implements OnInit {

 uploadForm: FormGroup;

constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {
    this.uploadForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: [''],
      address: this.formBuilder.group({
      address1: [''],
      city: ['']
    // gst: ['']
      }),
      company_name: [''],
      pan_number: [''],
      aadhar_number: [''],
      gstn:[''],
      bank_details: this.formBuilder.group({
        bank_name: [''],
        account_number: [''],
        ifsc_code: ['']
        }),
      });
  }

ngOnInit() {}

onSubmit() {
this.httpClient.post('http://165.22.219.195:2390/api/reference', this.uploadForm.value)
.subscribe(
  (res) => {
    console.log(res)
  },
  (err) => console.log(err)
);
  }
}

