import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  
  // adminRegistration = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   cpassword: new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     postalCode:new FormControl('')
  //   })
  // });
  constructor(private fb:FormBuilder) { }
  adminRegistration = this.fb.group({
    email:[''],
    password:[],
    cpassword:[],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalCode:[]

    })
  })

  ngOnInit(): void {
  }
  LoadApi(){
    this.adminRegistration.patchValue({
      email:'santhosh@gmail.com',
      address:{
        city:'Siricilla',
        state:'Telangana',
        postalCode:'505301'
      }
    });
  }
}
