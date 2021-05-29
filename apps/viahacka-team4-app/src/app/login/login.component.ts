import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'viahacka-team4-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authGuard: AuthGuard,
    private router: Router
  ) { }

  login(): void {
    this.authGuard.login = true;
    this.router.navigate(['']);
  }

}
