import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MediaComponent }      from './media.component';
import { MediaUpdateComponent }  from './media-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/media', pathMatch: 'full' },
 { path: 'media',     component: MediaComponent },
 { path: 'update/:id', component: MediaUpdateComponent },
 

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}