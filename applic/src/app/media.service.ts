import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Media} from './media';


@Injectable()
export class MediaService {

private headers = new Headers({'Content-Type': 'application/json'});
  private mediaUrl = 'api/media';  
  
  constructor(private http: Http) { }
  
   getMedias(): Promise <Media[]> {
  return this.http.get(this.mediaUrl)
             .toPromise()
             .then(response => response.json() as Media[])
             .catch(this.handleError)
   
  }
  
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
  

  
  }
  

