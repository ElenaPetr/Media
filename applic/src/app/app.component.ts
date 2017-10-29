import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a routerLink="/media" routerLinkActive="active">Media</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls:['./app.component.css']
})
export class AppComponent {

}
