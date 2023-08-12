import { Injectable } from '@angular/core';
import {products as data} from "../data/products"
import {IProduct} from "../models/product";
import {Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  sortChangeEvent: Subject<string> = new Subject<string>();
  products:IProduct[] = []


  constructor() {
  }

  sortedCategory(category:string){
    this.products = data.filter((p:IProduct) => p.category === category)
    return this.products
  }
}
