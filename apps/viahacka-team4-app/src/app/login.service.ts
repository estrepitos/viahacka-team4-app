import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = sessionStorage.getItem('login') === '1';

  login(sellerId: string, loja: string): void {
    sessionStorage.setItem('login', '1');
    sessionStorage.setItem('sellerId', sellerId);
    sessionStorage.setItem('loja', loja);
    this.isLoggedIn = true;
  }

  logout(): void {
    sessionStorage.setItem('login', '0');
    sessionStorage.removeItem('loja');
    sessionStorage.removeItem('sellerId');
    this.isLoggedIn = false;
  }

  getLoja(): string {
    return sessionStorage.getItem('loja');
  }

  getSellerId(): number {
    return Number(sessionStorage.getItem('sellerId'));
  }
}
