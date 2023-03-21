import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError, timeout } from 'rxjs';
import { Country } from '../interfaces/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(
    private http: HttpClient
  ) { }

  searchCapital( term: string ): Observable<Country[]>{

    return this.http.get<Country[]>(`${ this.apiUrl }/capital/${ term }`)
    .pipe(
      catchError(() => of([])),
      timeout(500)
    );
  }
}
