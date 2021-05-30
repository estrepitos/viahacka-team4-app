import { Component, OnInit } from '@angular/core';
import { faAd, faPercentage, faTruck, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Conquista } from '../../interfaces/conquista';
import { LoginService } from '../login.service';
import { SellersService } from '../sellers.service';

@Component({
  selector: 'viahacka-team4-app-conquistas',
  templateUrl: './conquistas.component.html',
  styleUrls: ['./conquistas.component.scss']
})
export class ConquistasComponent implements OnInit {

  conquistas: Array<Conquista>;

  constructor(private sellerService: SellersService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getConquistas();
  }

  getConquistas(): void {
    this.sellerService.getConquistas(this.loginService.getSellerId()).subscribe(conquistas => this.conquistas = conquistas);
  }

  getIcone(tipo: string): IconDefinition {
    switch (tipo) {
      case 'Frete':
        return faTruck;
      case 'Anuncio':
        return faAd;
      case 'Comissao':
        return faPercentage;
    }
  }

  getDataDesc(inicio: Date, termino: Date): string {
    inicio = new Date(inicio);
    termino = new Date(termino);
    const now = new Date();

    if (termino < now) {
      return `Terminou em ${termino.toLocaleDateString('pt-br')}`
    } else if (inicio < now) {
      return `Termina em ${termino.toLocaleDateString('pt-br')}`
    } else {
      return `Inicia em ${inicio.toLocaleDateString('pt-br')}`
    }
  }

  isDone(termino: Date): string {
    termino = new Date(termino);
    const now = new Date();
    if (termino < now) {
      return 'done ';
    }
  }
}
