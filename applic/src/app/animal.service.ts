import { Injectable } from '@angular/core';

import { List} from './animal';
import { ANIMALS } from './mock-animals';


@Injectable()
export class AnimalService {
  getAnimals(): Promise<List[]> {
    return  Promise.resolve(ANIMALS);
  }
}