import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conquista } from '../interfaces/conquista';
import { Desafio } from '../interfaces/desafio';
import { Seller } from '../interfaces/seller';

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  constructor(private httpClient: HttpClient) { }
  getSeller(loja: string): Observable<Seller> {
    return this.httpClient.get<Seller>(`https://viahacka-node-api-forgiving-warthog.mybluemix.net/sellers/${loja}`);
  }

  getConquistas(sellerId: number): Observable<Array<Conquista>> {
    return this.httpClient.get<Array<Conquista>>(
      `https://viahacka-node-api-forgiving-warthog.mybluemix.net/sellers/${sellerId}/conquistas`
    );
  }

  getDesafios(sellerId: number): Observable<Array<Desafio>> {
    return this.httpClient.get<Array<Desafio>>(`https://viahacka-node-api-forgiving-warthog.mybluemix.net/sellers/${sellerId}/desafios`);
  }
}

