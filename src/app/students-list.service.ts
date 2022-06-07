import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterStudent } from './interface/registration-interface';
import { throwError } from 'rxjs'; 
import { catchError} from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class StudentsListService {

  constructor(private http:HttpClient) {
    
   }
  getStudentsData(){
    return this.http.get('http://localhost:8080/api/mobile/findall');
  }
  LoginRegister(data:any){

    return this.http.post<any>('http://localhost:8080/api/mobile/admin-register',data);
  }
  RegisterStudent(form:any):Observable<RegisterStudent[]>{
    return this.http.post<RegisterStudent[]>('http://localhost:8080/api/mobile/student-register',form).pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message|| 'server error');
  }
}
