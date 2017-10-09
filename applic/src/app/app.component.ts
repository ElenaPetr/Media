<<<<<<< HEAD
import { Component, OnInit} from '@angular/core';
import {List } from './animal';
import { AnimalService } from './animal.service';

 
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
	<h2>Чтобы узнать описание, выберите зверя</h2>
    <ul class="an">
      <li *ngFor="let item of animals"
        [class.selected]="item === selectedItem"
        (click)="onSelect(item)">
        <span class="badge">{{item.id}}</span> {{item.name}} 
      </li>
    </ul>
	<detail [oneName]="selectedItem"></detail>
    `,
	styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .an {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .an li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .an li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .an li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .an .text {
      position: relative;
      top: -3px;
    }
    .an .badge {
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
  `],
  providers: [AnimalService]
})

export class AppComponent implements OnInit {
  title = 'Звери';
  animals:List[];
  selectedItem: List;
  
  constructor(private animalService: AnimalService) { }
  
 getAnimals(): void {
  this.animalService.getAnimals().then(animals => this.animals = animals);
}
ngOnInit(): void {
  this.getAnimals();
}
  onSelect(animal: List): void {
    this.selectedItem = animal;
	
	
  }
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
>>>>>>> parent of dc539db... first commit. lesson 3
}
