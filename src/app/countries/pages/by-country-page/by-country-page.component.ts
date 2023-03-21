import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface.ts';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public subscriptions: Subscription[] = [];
  public initialValue!: string;

  constructor(
    private countriesService: CountriesService
  ){}

  ngOnInit(): void {
    const initialValues = this.countriesService.cacheStore.byCountries;
    this.countries = initialValues.countries;
    this.initialValue = initialValues.term;
  }
  
  searchByCountry( term: string ): void {
    this.countriesService.searchCountry( term ).subscribe( (countries: Country[])=>{
      this.countries = countries;
    });
  }

  
}
