import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
  regForm = new FormGroup({
    fname: new FormControl(''),
    lname:new FormControl(''),
    email:new FormControl(''),
    mobile:new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }
  regSubmit(){

  }
}
