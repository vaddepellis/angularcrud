import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup } from '@angular/forms';
import { StudentsListService } from '../students-list.service';
import { Router } from '@angular/router';
import { getStatesI, RegisterStudent } from '../interface/registration-interface';
import { Observable } from 'rxjs';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  states:any=[];
  districtList:any=[];
  cityList:any=[];
  stateId:any;
  regForm = new FormGroup({
    fname: new FormControl(''),
    lname:new FormControl(''),
    age:new FormControl(''),
    email:new FormControl(''),
    mobile:new FormControl(''),
    gender:new FormControl(''),
    profile_pic:new FormControl(''),
    state:new FormControl(''),
    district:new FormControl(''),
    city:new FormControl(''),
    pincode:new FormControl(''),
    
  });
  constructor(private studentRegister:StudentsListService,private router:Router, private loc:LocationService) { }
 
  ngOnInit(): void {
    this.getStatesList();
  }
  
  registrationSubmit(form:any){
    this.studentRegister.RegisterStudent(form.value).subscribe((res:any)=>{
      console.log(res);
      if(res == 200){
        this.router.navigate(['/home']);
      }
    }
    );

  }
  ngDoCheck(){
    
  }
  getStatesList(){
    this.states = this.loc.getStates().subscribe((statesList:any)=>{
      this.states =  statesList;
    });
  }
  ngOnChanges(){
    
  }
  stateChange(event:any){
    this.districtList = this.loc.getDistrict(event.target.value).subscribe((districtList:any)=>{       
      this.districtList = districtList;
      console.log(districtList);
        
    })
  }
  cityChange(event:any){
    this.cityList = this.loc.getCity(event.target.value).subscribe((cityList:any)=>{
      this.cityList =  cityList;
      console.log(cityList);
    })
  }
}
