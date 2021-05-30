import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = sessionStorage.getItem('login') === '1';

  login(): void {
    sessionStorage.setItem('login', '1');
    this.isLoggedIn = true;
  }

  logout(): void {
    sessionStorage.setItem('login', '0');
    this.isLoggedIn = false;
  }
}
