import { Component, OnInit } from '@angular/core';
import { faAd, faCoins, faDollarSign, faExclamationTriangle, faTrophy, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Desafio } from '../../interfaces/desafio';
import { LoginService } from '../login.service';
import { SellersService } from '../sellers.service';

@Component({
  selector: 'viahacka-team4-app-desafios',
  templateUrl: './desafios.component.html',
  styleUrls: ['./desafios.component.scss']
})
export class DesafiosComponent implements OnInit {
  faDollarSign = faDollarSign;
  faAd = faAd;
  faCoins = faCoins;
  faExclamationTriangle = faExclamationTriangle;
  faTrophy = faTrophy;

  desafios: Array<Desafio>;

  constructor(private sellerService: SellersService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getDesafios();
  }

  getDesafios(): void {
    this.sellerService.getDesafios(this.loginService.getSellerId()).subscribe(desafios => this.desafios = desafios);
  }

  getIcone(tipo: string): IconDefinition {
    switch (tipo) {
      case 'Ranking':
        return faTrophy;
      case 'Anuncio':
        return faAd;
      case 'Desconto':
        return faDollarSign;
    }
  }

  getClassRanking(descricao: string): string {
    if (descricao.includes('Bronze')) {
      return 'Bronze';
    } else if (descricao.includes('Prata')) {
      return 'Prata';
    } else if (descricao.includes('Ouro')) {
      return 'Ouro';
    } else if (descricao.includes('Diamante')) {
      return 'Diamante';
    }
  }
}
