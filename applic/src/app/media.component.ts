import { Component,OnInit }	from '@angular/core';
import { Router }					from '@angular/router';
import { UUID }						from 'angular2-uuid';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

import { Media }						from './media';
import { MediaService }			from './media.service';


 
@Component({
  selector: 'my-media',
  templateUrl: './media.component.html',
  styleUrls:['./media.component.css']
})
export class MediaComponent implements OnInit{
	medi:Media[];
	selectedPhoto:Media;
	
	constructor(
		private router:Router, 
		private mediaService: MediaService) { }
	
	ngOnInit(): void {
		this.getMedia();
	}

	getMedia(): void {
		this.mediaService.getMedias().then(response => this.medi = response);
	}
	
	delete(media: Media): void {
		this.mediaService
			.delete(media.id).then(() => {
				this.medi = this.medi.filter(h => h !== media);
				if (this.selectedPhoto === media) { 
					this.selectedPhoto = null;
				}});
	}

	onSelect(photo:Media) : void {
		this.selectedPhoto=photo;
		this.gotoDetail();
	}
	
	gotoDetail(): void {
		this.router.navigate(['/update', this.selectedPhoto.id]);
	}
}

// @Component({
//   selector: 'ngbd-tooltip-tplcontent',
//   template:`<ng-template #tipContent>{{name}}</ng-template>
// <p [ngbTooltip]="tipContent">
//  <i class="fa fa-edit fa-2x"></i></p>
// `
// })
// export class NgbdTooltipTplcontent {
//   name = 'update this media';
// }
