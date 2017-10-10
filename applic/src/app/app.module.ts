import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';




import { MediaComponent } from './media.component';

@NgModule({
  declarations: [
    MediaComponent
	
  ],
  imports: [
    BrowserModule,
	FormsModule,
  ],
  providers: [],
  bootstrap: [MediaComponent]
})
export class AppModule { }
