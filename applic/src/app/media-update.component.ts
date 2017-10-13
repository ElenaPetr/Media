import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Media }        from './media';
import { MediaService } from './media.service';

@Component({
  selector: 'media-update',
	templateUrl: './media-update.component.html',
	styleUrls: [ './media-update.component.css' ]
})

export class MediaUpdateComponent implements OnInit {
  photo: Media;

  constructor(
    private mediaService: MediaService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.mediaService.getMedia(+params.get('id')))
      .subscribe(jkkk => this.photo = jkkk);
  }
  
   save(): void {
    this.mediaService.update(this.photo)
      .then(() => this.goBack());
  }

  
  goBack(): void {
    this.location.back();
  }

 
}

  



