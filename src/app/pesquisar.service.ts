import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class PesquisarService {

  constructor(private http: HttpClient) { }

  private url = "https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook";

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url)
    .pipe(
      catchError(this.handleError<Produto[]>('getProdutos', []))
    );
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
