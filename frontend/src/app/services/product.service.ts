import { Injectable } from '@angular/core';
import { sample_meat } from 'src/data';
import { Meat } from '../shared/models/meat';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():Meat[]{
    return sample_meat;
  }

}
