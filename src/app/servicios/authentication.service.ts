import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export class User{
  constructor(
    public status:string,) {}
  
}

export class JwtResponse{
  constructor(public jwttoken:string,) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(private httpClient:HttpClient,private route:Router) {}

authenticate(username: string, password: string) {
  return this.httpClient.post<any>('https://afiliados-backend.herokuapp.com/api/login',{username,password}).pipe(
  map(userData => {sessionStorage.setItem('username',username);
    let tokenStr= 'Bearer '+userData.token;
    sessionStorage.setItem('token', tokenStr);
    return userData;
    }));
  }
  

isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
    return !(user === null)
}

logOut() {
    sessionStorage.removeItem('username')
}
}