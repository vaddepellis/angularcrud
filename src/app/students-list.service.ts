import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentsListService {

  constructor(private http:HttpClient) { }
  getStudentsData(){
    return this.http.get('http://localhost:8080/api/mobile/findall');
  }
}
