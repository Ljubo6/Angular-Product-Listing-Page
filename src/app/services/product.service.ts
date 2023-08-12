import { Injectable } from '@angular/core';
import {IProduct} from "../models/product";
import {Observable, Subject} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartProducts:IProduct[] = []
  totalPrice = 0
  private cartItemCountSubject: Subject<number> = new Subject<number>()
  private cartTotalPriceSubject: Subject<number> = new Subject<number>()

  constructor(private toastr:ToastrService) { }

  addProduct(product:IProduct){
    this.cartProducts.push(product)
    this.updateCartItemCount()
    this.updateCartTotalPrice()
    this.toastr.success('Тhe product has been added to the cart')
  }

  getCartItems():IProduct[]{
    return this.cartProducts
  }
  getCartItemsCount():Observable<number>{
    return this.cartItemCountSubject.asObservable()
  }
  getCartTotalPrice():Observable<number>{
    return this.cartTotalPriceSubject.asObservable()
  }
  removeProduct(product: IProduct) {
    this.cartProducts.splice(this.cartProducts.indexOf(product),1)
    this.updateCartItemCount()
    this.updateCartTotalPrice()
  }

  private updateCartItemCount() {
    this.cartItemCountSubject.next(this.cartProducts.length)
  }
  private updateCartTotalPrice(){
    this.cartTotalPriceSubject.next(this.cartProducts.reduce((total,product) => total + product.price,0))
  }
}
