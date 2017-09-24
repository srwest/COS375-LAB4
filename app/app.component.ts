import { Component } from '@angular/core';

import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  template: `
  <div class="col-sm-6 align-items-center" style="background-color:#9cb2d6;">
  <div class="text-center ">
    <h1 class="text-primary"><u>{{title}}</u></h1>
    <h2 >My Heroes</h2>
	</div>
	<hr>
    <ul class="">
	<div >
      <li   *ngFor="let hero of heroes" 
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)"  >
        <span class="" style="" >
		{{hero.name}}</span> 
		
      </li>
	  </div>
    </ul>
	<hr>
    <hero-detail [hero]="selectedHero"></hero-detail>
	</div>
  `,
  styles:[]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}