import { Country } from './../../interfaces/countries';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {


  public country!: Country

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ) )
      )
      .subscribe( ( country: Country) => {
        this.country = country;
      },()=> this.router.navigateByUrl(''))
  }
}
