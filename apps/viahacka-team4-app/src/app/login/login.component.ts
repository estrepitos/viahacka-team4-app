import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'viahacka-team4-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loja: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    if (this.loginService.isLoggedIn) {
      this.router.navigate(['']);
    }
  }

  login(): void {
    let loja = 'gemialidades';
    switch (this.loja) {
      case '2':
        loja = 'caldeirao';
        break;
    }

    this.loginService.login(this.loja, loja);
    this.router.navigate(['']);
  }

}
