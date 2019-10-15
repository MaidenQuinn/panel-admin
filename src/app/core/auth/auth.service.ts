import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLoginInfo } from './login-info';

const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:9000/api/login';
  private signupUrl = 'http://localhost:9000/api/users/sign-up';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo) {
    return this.http.post<Response>(this.loginUrl, credentials, {
      headers: httpHeaders,
      observe: 'response'
    });
  }

  signUp(info): Observable<HttpResponse<string>> {
    return this.http.post<string>(this.signupUrl, info, {
      headers: httpHeaders,
      observe: 'response'
    });
  }
}
