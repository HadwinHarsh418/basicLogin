import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url ='https://rootsitservices.azurewebsites.net/api';
  constructor(private _http: HttpClient) { 
  }

  login(user:any) {
    return this._http.post<any>(`${this._url}/User/UserAuthenticate`,user);
  }
  product(){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers = headers.append('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
    return this._http.get<any>(`${this._url}/Product/ProductList?theUserId=36`, {headers})
  }

}