import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthUser } from '../models/AuthUser';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  userToken: any;

  constructor(private _http: HttpClient) {}

  login(model: any) {
    return this._http.post<AuthUser>(this.baseUrl + 'login', model, {headers: new HttpHeaders()
        .set('Content-Type', 'application/json')})
        .pipe(map(user => {
          if (user) {
            console.log('this works');
            localStorage.setItem('token', user.tokenString);
            this.userToken = user.tokenString;
          }
        }));

    }
  }