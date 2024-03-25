import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  loggedIn = false;

  constructor(
    private httpClient: HttpClient,
  ) { }

  login(email:string , password: string):Observable<any> {
    return this.httpClient.post<any>('/login', {email, password}).pipe(
      map(data => {
        this.loggedIn = true;
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        return data;
      })
    );
  }

  logout() {
    this.loggedIn = false;
    localStorage.clear();
  }

}

