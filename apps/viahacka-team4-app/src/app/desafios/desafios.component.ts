import { Component } from '@angular/core';
import { faAd, faCoins, faDollarSign, faExclamationTriangle, faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'viahacka-team4-app-desafios',
  templateUrl: './desafios.component.html',
  styleUrls: ['./desafios.component.scss']
})
export class DesafiosComponent {
  faDollarSign = faDollarSign;
  faAd = faAd;
  faCoins = faCoins;
  faExclamationTriangle = faExclamationTriangle;
  faTrophy = faTrophy;
}
