import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public countries: Country[] = [];
  public subscriptions: Subscription[] = [];
  constructor(
    private countriesService: CountriesService
  ){}

  searchByRegion( region: Region ): void {
    this.selectedRegion = region
    this.countriesService.searchRegion( region ).subscribe( (countries: Country[])=>{
      this.countries = countries;
    });
  }
}
