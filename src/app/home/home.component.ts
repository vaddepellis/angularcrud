import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.login == false){
      this.router.navigate(['/login']);
    }
  }

}
