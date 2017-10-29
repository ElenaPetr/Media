import {Component,NgModule,OnInit} from '@angular/core';
import { Router }            	from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MediaService }         from './media.service';
import {Media} from './media'
import { FormsModule, ReactiveFormsModule,FormGroup,FormControl,FormBuilder}   from '@angular/forms';
import 'rxjs/add/operator/toPromise';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal.content.html',
  styleUrls:['./modal.content.css']
})
export class NgbdModalContent implements OnInit{
medi:Media[]=[];
mediaForm: FormGroup; 

  

  createForm() {
    this.mediaForm = this.fb.group({
      url: '', 
	  description:''
    });
  }

  constructor(
  public activeModal: NgbActiveModal,
  private mediaService: MediaService,
  private router:Router,
  private fb: FormBuilder) { 
    this.createForm();
  }
  
 ngOnInit(): void { }
 
   
  add(url:string,description:string): void {
   const id =  UUID.UUID();
    url = url.trim();
	  description = description.trim();
	
    if (!url && !description) { return; }
	
    this.mediaService.create(id,url,description)
      .then(media => {
	  console.log(media);
        this.medi.push(media);
      });
      this.activeModal.close(NgbdModalContent);
  }
  
  }