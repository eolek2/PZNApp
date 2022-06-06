import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = "https://api-pznapp.azurewebsites.net/api/";
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser = this.currentUserSource.asObservable();
  constructor(private http:HttpClient)
  {
  }

  private wasLogged:Boolean;
  register(model:any)
  {
    console.log(model);
    return this.http.post(this.baseUrl + 'authorization/register', model).pipe(
      map((response: any) => {
        const user = response;
        if (user)
        {
          localStorage.setItem('user', JSON.stringify(user));
          this.setCurrentUser(user);
        }
        return user;
      })
    );
  }

  login(model:any)
  {
    return this.http.post(this.baseUrl + 'authorization/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user)
          localStorage.setItem('user', JSON.stringify(user));
          this.setCurrentUser(user);
          this.wasLogged = true;
      })
    );
  }

  setCurrentUser(user:User)
  {
    this.currentUserSource.next(user);
  }

  logout()
  {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.wasLogged = false;
  }

  loggedIn()
  {
    return this.wasLogged;
  }

  me()
  {

  }
}
