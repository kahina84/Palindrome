import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, tap, map  } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { Palind } from './palind';
import 'rxjs/add/operator/map';

const apiUrl = 'https://www.linktogo.fr/assets/json/fluxpalindrome.json';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PalinService {
  palin;
  private PALINDR: Palind[] = [
    {
      id: 1,
      label: 'toto',
    },
    {
      id: 2,
      label: '12345654321',
    }
  ];

  constructor(private http: HttpClient) { }
  getPalinMock(): Palind[] {
    return this.PALINDR;
  }


  private extractData(res: Response) {
    let body = res;
    console.log(res);
    return body || {};
  }

  getPalin() {
    return this.http.get<Palind[]>('https://cors-anywhere.herokuapp.com/' + apiUrl, httpOptions)
    .map((res) => this.palin = res);
}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(error);
  }
}

