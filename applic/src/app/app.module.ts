import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { MediaComponent } from './media.component';
import { MediaUpdateComponent }  from './media-update.component';
import { MediaService }          from './media.service';
@NgModule({
  declarations: [
  AppComponent,
    MediaComponent,
	MediaUpdateComponent 
	
  ],
  imports: [
    BrowserModule,
	FormsModule,
	 HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
	 
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
