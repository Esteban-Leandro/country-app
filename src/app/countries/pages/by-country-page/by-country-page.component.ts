import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];
  public subscriptions: Subscription[] = [];
  constructor(
    private countriesService: CountriesService
  ){}

  searchByCountry( term: string ): void {
    this.countriesService.searchCountry( term ).subscribe( (countries: Country[])=>{
      this.countries = countries;
    });
  }
}
