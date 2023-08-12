import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  cartItemsCount:number = 0
  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
    this.productService.getCartItemsCount().subscribe(count => {
      this.cartItemsCount = count;
    })
  }
}
