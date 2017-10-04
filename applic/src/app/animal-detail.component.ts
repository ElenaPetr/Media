import { Component, Input } from '@angular/core';
import {Animal } from './animal';
@Component({
  selector: 'animal-detail',
  template:`
   <div *ngIf="animal">
      <h2>Вы выбрали пункт {{animal.id}} : {{animal.name}}!</h2>
      <div><label>id: </label>{{animal.id}}</div>
	   <div><label>описание: {{animal.name}} </label>{{animal.desc}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="animal.name" placeholder="name"/>
      </div>
    </div>
	`
})
export class AnimalDetailComponent {
  @Input() animal: Animal;

}