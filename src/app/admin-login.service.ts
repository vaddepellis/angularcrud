import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http:HttpClient) { }
  loginSubmit(){
    // return this.http.post('http://localhost:8080/api/mobile/findall');
  }
}
