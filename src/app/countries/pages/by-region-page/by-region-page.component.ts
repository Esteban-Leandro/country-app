import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public subscriptions: Subscription[] = [];
  constructor(
    private countriesService: CountriesService
  ){}

  searchByRegion( term: string ): void {
    this.countriesService.searchRegion( term ).subscribe( (countries: Country[])=>{
      this.countries = countries;
    });
  }
}
