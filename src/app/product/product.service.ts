import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'https://mystique-v2-americanas.juno.b2w.io';

  private termResearched = new BehaviorSubject<string>('');
  term = this.termResearched.asObservable();

  private alertMessage = new BehaviorSubject<string>('');
  alert = this.alertMessage.asObservable();

  constructor(private http: HttpClient) {}

  sendAlert(alert: string) {
    this.alertMessage.next(alert);
  }

  search(term: string) {
    this.termResearched.next(term);
  }

  getProduto(): Observable<any> {
    const observavel = this.http
      .get(`${this.url}/autocomplete?content=camiseta&source=nanook`)
      .pipe(
        catchError(this.handleError<any>('getProduto', [])),
        map(element => element.products)
      );
    return observavel;
  }

  getProdutos(): Observable<any> {
    return this.http
      .get(`${this.url}/autocomplete?content=camiseta&source=nanook`)
      .pipe(catchError(this.handleError<any>('getProdutos', [])));
  }

  getSuggestions(): Observable<any> {
    return this.http
      .get(`${this.url}/autocomplete?content=camiseta&source=nanook`)
      .pipe(catchError(this.handleError<any>('getSuggestions', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
