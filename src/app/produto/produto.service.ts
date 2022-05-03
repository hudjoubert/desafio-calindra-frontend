import { ProdutoDTO } from './produto-dto';
import { Sugestao } from './sugestao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private url = 'https://mystique-v2-americanas.juno.b2w.io';

  private termoPesquisado = new BehaviorSubject<string>('');
  termo = this.termoPesquisado.asObservable();

  constructor(private http: HttpClient) {}

  pesquisar(termo: string) {
    this.termoPesquisado.next(termo);
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

  getSugestoes(): Observable<any> {
    return this.http
      .get(`${this.url}/autocomplete?content=camiseta&source=nanook`)
      .pipe(catchError(this.handleError<any>('getSugestoes', [])));
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
