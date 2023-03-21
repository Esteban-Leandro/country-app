import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface.ts';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public countries: Country[] = [];
  public subscriptions: Subscription[] = [];

  constructor(
    private countriesService: CountriesService
  ){}

  ngOnInit(): void {
    const initialValues = this.countriesService.cacheStore.byRegion;
    this.countries = initialValues.countries;
    this.selectedRegion = initialValues.region;
  }

  searchByRegion( region: Region ): void {
    this.selectedRegion = region
    this.countriesService.searchRegion( region ).subscribe( (countries: Country[])=>{
      this.countries = countries;
    });
  }
  
}
