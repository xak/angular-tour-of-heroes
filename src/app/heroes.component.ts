import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'heroes',
  //templateUrl: './heroes.component.html',
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes"><li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li></ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `,
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})



export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
