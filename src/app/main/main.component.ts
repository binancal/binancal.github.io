import { Component, OnInit } from '@angular/core';
import { BinanceService } from '../binance.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private binanceService: BinanceService) { }

  ngOnInit(): void {
    this.getCurrentPriceBNB();
    this.getCurrentPriceUSD();
  }

  currentPriceBNB: number = 0;
  currentPriceUSD: number = 0;

  buyPriceBNB?: number;
  buyAmountUSD?: number;
  buyAmountBNB?: number;

  sellPriceBNB?: number;
  sellAmountUSD?: number;
  sellAmountBNB?: number;

  profitAndLoss?: number;

  getCurrentPriceBNB() {
    this.binanceService.getCurrentPriceBNB()
      .subscribe(
        (arg) => {
          this.currentPriceBNB = parseInt(arg.price);
          this.sellPriceBNB = parseInt(arg.price);
        }
      );
  }

  getCurrentPriceUSD() {
    this.binanceService.getCurrentPriceUSD()
      .subscribe(arg => this.currentPriceUSD = arg.USD_VND);
  }
}
