import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { getStatesI,getDistrictI,getCityI } from './interface/registration-interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  constructor(private http:HttpClient) { }
  getStates():Observable<getStatesI[]>{
    return this.http.get<getStatesI[]>('http://localhost:8080/api/location/getStates').pipe(
      catchError(this.stateError)
    );
  }
  stateError(error:HttpErrorResponse){
    return throwError(error.message || 'unable to fetch states');
  }
  getDistrict(id:any){
    return this.http.get('http://localhost:8080/api/location/getDistrict/'+id)
    .pipe(
      catchError(this.districtError)
    );
  }
  districtError(error:HttpErrorResponse){
    return throwError(error.message || 'unable to fetch district');
  }
  getCity(id:any){
    return this.http.get('http://localhost:8080/api/location/getCity/'+id).pipe(
      catchError(this.cityError)
    );
  }
  cityError(error:HttpErrorResponse){
    return throwError(error.message || 'unable to fetch city');
  }
}
