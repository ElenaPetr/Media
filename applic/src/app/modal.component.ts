import {Component,NgModule,OnInit} from '@angular/core';
import { Router }            	from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
//import 'rxjs/add/operator/toPromise';
//import { UUID } from 'angular2-uuid';


import { MediaService }         from './media.service';
import {Media} from './media'
import { MediaComponent}         from './media.component';
import { NgbdModalContent}         from './modal.content';

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal.component.html'
})

export class NgbdModalComponent {
  constructor(private modalService: NgbModal,
   private mediaService: MediaService
  ) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
  
  }
  
  
}
