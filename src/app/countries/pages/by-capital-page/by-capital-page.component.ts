import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public subscriptions: Subscription[] = [];
  constructor(
    private countriesService: CountriesService
  ){}

  searchByCapital( term: string ): void {
    this.countriesService.searchCapital( term ).subscribe( (countries: Country[])=>{
      this.countries = countries;
    });
  }
}
