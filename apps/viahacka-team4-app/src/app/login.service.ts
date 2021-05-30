import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = sessionStorage.getItem('login') === '1';

  login(loja: string): void {
    sessionStorage.setItem('login', '1');
    sessionStorage.setItem('loja', loja);
    this.isLoggedIn = true;
  }

  logout(): void {
    sessionStorage.setItem('login', '0');
    sessionStorage.removeItem('loja');
    this.isLoggedIn = false;
  }
}
