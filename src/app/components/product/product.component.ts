import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  @Input() product!:IProduct
  details:boolean = false
  constructor(private productService:ProductService) {
  }

  addProduct(product: IProduct) {
    this.productService.addProduct(product)
  }

  ngOnInit(): void {
  }
}
