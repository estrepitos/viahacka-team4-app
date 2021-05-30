import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthGuard } from './auth.guard';

@Component({
  selector: 'viahacka-team4-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faLogout = faSignOutAlt;

  constructor(public authGuard: AuthGuard, private router: Router) { }

  logout(): void {
    this.authGuard.login = false;
    this.router.navigate(['login']);
  }
}
