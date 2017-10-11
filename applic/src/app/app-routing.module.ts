import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MediaComponent }      from './media.component';


const routes: Routes = [
 
  { path: 'media',     component: MediaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}