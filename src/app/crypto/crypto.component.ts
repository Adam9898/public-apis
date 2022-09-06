import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CoinGeckoCrypto} from "./coingecko.model";

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  public cryptos: CoinGeckoCrypto[]  = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur' +
      '&order=market_cap_desc&per_page=30&page=1&sparkline=false').subscribe((cryptoArr: CoinGeckoCrypto[]) => {
      this.cryptos = cryptoArr;
    });
  }

  onSubmit() {


  }

}
