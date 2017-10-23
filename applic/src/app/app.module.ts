import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UUID } from 'angular2-uuid';



import { AppComponent } from './app.component';
import { MediaComponent} from './media.component';
import { MediaUpdateComponent }  from './media-update.component';
import { MediaService }          from './media.service';
import { NgbdModalComponent} from './modal.component';
import { NgbdModalContent} from './modal.content';

@NgModule({
  declarations: [
  AppComponent,
    MediaComponent,
	MediaUpdateComponent,
	NgbdModalComponent, 
	NgbdModalContent
 	
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	 HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
	NgbModule.forRoot() 
  ],
 entryComponents: [NgbdModalContent],
  providers: [MediaService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
