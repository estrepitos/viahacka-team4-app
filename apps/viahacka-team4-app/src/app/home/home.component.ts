import { Component, OnInit } from '@angular/core';
import { faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Seller } from '../../interfaces/seller';
import { LoginService } from '../login.service';
import { SellersService } from '../sellers.service';

@Component({
  selector: 'viahacka-team4-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faStar = faStar;
  faTrophy = faTrophy;
  seller: Seller;

  constructor(private loginService: LoginService, private sellersService: SellersService) { }

  ngOnInit(): void {
    const loja = this.loginService.getLoja();
    this.getSeller(loja);
  }

  getSeller(loja: string): void {
    this.sellersService.getSeller(loja).subscribe(seller => {
      this.seller = seller;
    })
  }

  getNextCategoria(categoria: string): string {
    switch (categoria) {
      case '':
        return 'Bronze';
      case 'Bronze':
        return 'Prata';
      case 'Prata':
        return 'Ouro';
      case 'Ouro':
        return 'Diamante';
      default:
        return '';
    }
  }
}
