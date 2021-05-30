import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private router: Router, private loginService: LoginService) { }
  canLoad(): boolean {
    return this.isAuthorized();
  }

  canActivate(): boolean {
    return this.isAuthorized();
  }

  private isAuthorized(): boolean {
    if (!this.loginService.isLoggedIn) {
      this.router.navigate(['login']);
    }
    return this.loginService.isLoggedIn;
  }

}
