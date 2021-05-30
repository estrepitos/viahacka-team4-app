import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from './login.service';

@Component({
  selector: 'viahacka-team4-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faLogout = faSignOutAlt;

  constructor(public loginService: LoginService, private router: Router) { }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
