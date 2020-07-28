import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanManagementServiceService {

  constructor( private http : HttpClient) { }

  public loginUserFromRemote(user :User):Observable<any>{
    const opts = {
      headers: new HttpHeaders({
        'accept': '*/*',
        'Content-Type': 'application/json'
      })
    };
    console.log(opts.headers.get("Content-Type"))
    return this.http.post<any>("http://localhost:8081/loan-management/v1/login", user)
  }

  public registerUserFromRemote(user :User):Observable<any>{
    const opts = {
      headers: new HttpHeaders({
        'accept': '*/*',
        'Content-Type': 'application/json'
      })
    };
    console.log(opts.headers.get("Content-Type"))
    return this.http.post<any>("http://localhost:8081/loan-management/v1/registration", user)
  }

}
