import { Injectable } from '@angular/core';
import { Observable, observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/internal/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BinanceService {

  constructor(private http: HttpClient) { }

  getCurrentPriceBNB() {
    const httpRequestUrl = "https://api.binance.com/api/v3/ticker/price?symbol=BNBBUSD";
    return this.http.get<any>(httpRequestUrl).pipe(
      catchError(
        (error) => {
          console.error(error.name + ": " + error.message);
          return of({
            symbol: "BNBBUSD",
            price: 0
          });
        }
      )
    );
  }

  getCurrentPriceUSD() {
    const httpRequestUrl = "localhost";
    return this.http.get<any>(httpRequestUrl).pipe(
      catchError(
        (error) => {
          return of({
            USD_VND: 23017
          });
        }
      )
    );
  }
}
