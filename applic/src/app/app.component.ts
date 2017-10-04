import { Component } from '@angular/core';

export class Animal {
  id: number;
  name: string;
  desc:string;
}

const ANIMALS: Animal[] = [
  { id: 11, name: 'Волк' , desc:'серый'},
  { id: 12, name: 'Лиса', desc:'рыжая'},
  { id: 13, name: 'Лось' , desc:'рогатый'},
  { id: 14, name: 'Заяц', desc:'косой' },
  { id: 15, name: 'Барсук', desc: 'веселый'},
  { id: 16, name: 'Олень', desc:'красивый' },
  { id: 17, name: 'Ёж', desc:'колючий' },
  { id: 18, name: 'Тигр', desc:'полосатый' },
  { id: 19, name: 'Белка' , desc:'пушистая'},
  { id: 20, name: 'Мышка' , desc:'маленькая'}
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Звери живущие в лесу</h2>
	<h3>Чтобы узнать описание, выберите зверя</h3>
    <ul class="animals">
      <li *ngFor="let animal of animals"
        [class.selected]="animal === selectedAnimals"
        (click)="onSelect(animal)">
        <span class="badge">{{animal.id}}</span> {{animal.name}} 
      </li>
    </ul>
    <div *ngIf="selectedAnimal">
      <h2>Вы выбрали пункт {{selectedAnimal.id}} : {{selectedAnimal.name}}!</h2>
      <div><label>id: </label>{{selectedAnimal.id}}</div>
	   <div><label>описание: {{selectedAnimal.name}} </label>{{selectedAnimal.desc}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedAnimal.name" placeholder="name"/>
      </div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .animals {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .animals li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .animals li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .animals li:hover {
      color: red;
      background-color: #DDD;
      left: .1em;
    }
    .animals .text {
      position: relative;
      top: -3px;
    }
    .animals .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Звери';
  animals = ANIMALS;
  selectedAnimal: Animal;

  onSelect(animal: Animal): void {
    this.selectedAnimal = animal;
  }
}

