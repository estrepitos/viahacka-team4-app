import { Component } from '@angular/core';
import { faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'viahacka-team4-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faStar = faStar;
  faTrophy = faTrophy;
}
