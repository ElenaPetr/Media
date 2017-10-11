import { Component,OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {Media} from './media';
import { MediaService }         from './media.service';




@Component({
  selector: 'my-media',
  templateUrl: './media.component.html',
  styleUrls: [ './media.component.css' ]
  

})
	export class MediaComponent implements OnInit{
		title='Media';
		media:Media[];
		selectedPhoto:Media;
		
		constructor(private router:Router,
		private mediaService: MediaService) { }
		
		
 getMedia(): void {
    this.mediaService.getMedias().then(jkkk=> this.media = jkkk);
  }

  ngOnInit(): void {
    this.getMedia();
  }
		onSelect(photo:Media) : void {
			this.selectedPhoto=photo;
		}
	}

