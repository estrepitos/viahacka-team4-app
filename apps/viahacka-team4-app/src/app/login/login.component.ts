import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'viahacka-team4-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    if (this.loginService.isLoggedIn) {
      this.router.navigate(['']);
    }
  }

  login(): void {
    this.loginService.login();
    this.router.navigate(['']);
  }

}
