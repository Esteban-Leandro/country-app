import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {
  routes: Routes[] = [
    {
      path: '',
      name: 'Home'
    },
    {
      path: 'about',
      name: 'about'
    },
    {
      path: 'contact',
      name: 'contact'
    },
    {
      path: 'countries/by-capital',
      name: 'por Capital'
    },
    {
      path: 'countries/by-country',
      name: 'por país'
    },
    {
      path: 'countries/by-region',
      name: 'por region'
    },

  ]
}

export interface Routes{
  path: string;
  name: string;
}