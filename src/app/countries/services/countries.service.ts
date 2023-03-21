import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError, timeout } from 'rxjs';
import { Country } from '../interfaces/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(
    private http: HttpClient
  ) { }




  searchCountryByAlphaCode( code: string ): Observable<Country>{
    return this.http.get<Country[]>(`${ this.apiUrl }/alpha/${ code }`)
    .pipe(
      map( (countries: Country[]) => countries[0] ),
      catchError((error: HttpErrorResponse) => throwError(()=> error)),
      timeout(500)
    );
  }

  searchCapital( term: string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${ this.apiUrl }/capital/${ term }`)
    .pipe(
      catchError(() => of([])),
      // timeout(500)
    );
  }
  
  searchCountry( term: string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${ this.apiUrl }/name/${ term }`)
    .pipe(
      catchError(() => of([])),
      // timeout(500)
    );
  }

  searchRegion( region: string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${ this.apiUrl }/region/${ region }`)
    .pipe(
      catchError(() => of([])),
      // timeout(500)
    );
  }
}
