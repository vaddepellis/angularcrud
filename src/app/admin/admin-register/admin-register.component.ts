import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { StudentsListService } from 'src/app/students-list.service';
import { AdminInterface } from './adminInterface';
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
  constructor(private fb:FormBuilder,private studentService:StudentsListService) { }
  adminRegistration = this.fb.group({
    email:[''],
    password:[''],
    // cpassword:[],
    // address:this.fb.group({
    //   city:[''],
    //   state:[''],
    //   postalCode:[]

    // })
  })

  ngOnInit(): void {
  }
  LoadApi(){
    this.adminRegistration.patchValue({
      email:'santhosh@gmail.com',
      password:'123456'
    });
  }
  LoginRegister(data:any){
    console.log(data);
    this.studentService.LoginRegister(data.value).subscribe((res)=>{
      console.log('responce'+res);
    });
  }
}
