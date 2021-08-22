import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
//   token:string;
//   user:any[];
  constructor() { }

  isLogged() {
      let token = localStorage.getItem('access_token');
      if(!token) {
          return false;
      }
      return true;
  }

  setUser(token, user) {
    localStorage.setItem('access_token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }


  getUser() {
    let user = localStorage.getItem('user');
    return JSON.parse(user);
  }

  setUserNull() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
  }
}
