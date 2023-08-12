import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent implements OnInit{
  cartItems:IProduct[] = []
  totalPrice = 0
  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
    this.cartItems = this.productService.getCartItems()
    this.productService.getCartTotalPrice().subscribe(totalPrice => {
      this.totalPrice = totalPrice
    })
  }

  deleteItem(product:IProduct) {
    this.productService.removeProduct(product)
  }
}
