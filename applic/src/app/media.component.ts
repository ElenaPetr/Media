import { Component,OnInit} from '@angular/core';
import { Router }            from '@angular/router';

import {Media} from './media';
import { MediaService }         from './media.service';





@Component({
  selector: 'my-media',
  templateUrl: './media.component.html',
  styleUrls: [ './media.component.css' ]
})
	export class MediaComponent implements OnInit{
		medi:Media[];
		selectedPhoto:Media;
		
		
		constructor(private router:Router,
		private mediaService: MediaService) { }
		
		
		
		
 getMedia(): void {
    this.mediaService.getMedias().then(jkkk=> this.medi = jkkk);
  }
  
		delete(media: Media): void {
  this.mediaService
      .delete(media.id)
      .then(() => {
        this.medi = this.medi.filter(h => h !== media);
        if (this.selectedPhoto === media) { this.selectedPhoto = null; }
      });
	}
	
	 ngOnInit(): void {
    this.getMedia();
  }
		onSelect(photo:Media) : void {
			this.selectedPhoto=photo;
			this.gotoDetail();
		}
		
	gotoDetail(): void {
    this.router.navigate(['/update', this.selectedPhoto.id]);
  }

}

