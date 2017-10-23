import {Component,NgModule,OnInit} from '@angular/core';
import { Router }            	from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MediaService }         from './media.service';
import {Media} from './media'
import { MediaComponent}         from './media.component';
import 'rxjs/add/operator/toPromise';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal.content.html'
})
export class NgbdModalContent implements OnInit{
medi:Media[];
selectedPhoto:Media;


  constructor(public activeModal: NgbActiveModal,
  private mediaService: MediaService) {}
  
 ngOnInit(): void { }
  
   
  add(url:string,description:string): void {
   const id =  UUID.UUID();
    url = url.trim();
	description=description.trim();
	
    if (!url && !description) { return; }
    this.mediaService.create(id,url,description)
      .then(media => {
        this.medi.push(media);
        this.selectedPhoto = null;
      });
  }
  
  }

