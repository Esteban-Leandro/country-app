import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface.ts';
import { TermCountries } from '../../interfaces/cache-store.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public subscriptions: Subscription[] = [];
  public isLoading: boolean = false;

  public initialValue!: string;

  constructor(
    private countriesService: CountriesService
  ){}

  ngOnInit(): void {
    const initialValues = this.countriesService.cacheStore.byCapital;
    this.countries = initialValues.countries;
    this.initialValue = initialValues.term;
  }
  
  searchByCapital( term: string ): void {
    this.isLoading = true;
    this.countriesService.searchCapital( term ).subscribe( (countries: Country[])=>{
      this.countries = countries;
      this.isLoading = false;

    });
  }

  

}
