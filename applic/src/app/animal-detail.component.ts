import { Component, Input } from '@angular/core';
import {List } from './animal';
@Component({
  selector: 'detail',
  template:`
 <div *ngIf="oneName">
      <h2>Вы выбрали пункт {{oneName.id}} : {{oneName.name}}!</h2>
      <div><label>id: </label>{{oneName.id}}</div>
	   <div><label>описание: {{oneName.name}} </label>{{oneName.desc}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="oneName.name" placeholder="name"/>
      </div>
    </div>
	`
})
export class AnimalDetailComponent {
  @Input() oneName: List;

}