import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap, throwError, timeout } from 'rxjs';
import { Country } from '../interfaces/country.interface.ts';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  
  public cacheStore: CacheStore = {
   byCapital:   { term:   '', countries: [] },
   byCountries: { term:   '', countries: [] },
   byRegion:    { region: '', countries: [] },
  }

  constructor(
    private http: HttpClient
  ) { 
    this.loadFromSessionStorage();
  }


  private saveToSessionStorage(){
    sessionStorage.setItem( 'cacheStore', JSON.stringify( this.cacheStore ))
  }

  private loadFromSessionStorage(){
    if( !sessionStorage.getItem( 'cacheStore') ) return;
    this.cacheStore = JSON.parse( sessionStorage.getItem( 'cacheStore')! )
    
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError(() => error)),
      )

  }


  searchCountryByAlphaCode(code: string): Observable<Country> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(
        map((countries: Country[]) => countries[0]),
        catchError((error: HttpErrorResponse) => throwError(() => error)),
        timeout(500)
      );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byCapital = { term, countries } ),
        tap(() => this.saveToSessionStorage())
      )
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCountries = { term, countries } ),
      tap(() => this.saveToSessionStorage())
    )
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byRegion = { region, countries } ),
      tap(() => this.saveToSessionStorage())
    )
  }
}
