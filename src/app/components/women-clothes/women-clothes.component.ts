import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {CategoryService} from "../../services/category.service";
import {FilterService} from "../../services/filter.service";
const STEP = 3

@Component({
  selector: 'app-women-clothes',
  templateUrl: './women-clothes.component.html',
  styleUrls: ['./women-clothes.component.css']
})
export class WomenClothesComponent implements OnInit{
  products:IProduct[] = []
  displayedProducts:IProduct[] = []

  currentIndex:number = 0
  noMoreProducts = false
  category = 'women\'s clothing'
  sortValue = ''

  priceFilter: number | null = null
  brandFilter: string | null = null

  constructor(private categoryService:CategoryService,
              private filterService:FilterService
              ) {
  }

  ngOnInit(): void {
    this.products = this.categoryService.sortedCategory(this.category)
    this.filterService.priceFilterSubject.subscribe(filterValue => {
      this.products = this.categoryService.sortedCategory(this.category)
      this.priceFilter = filterValue === '0' ? null : parseFloat(filterValue);
      this.filterProducts();
    });
    this.filterService.brandFilterSubject.subscribe(filterValue => {
      this.products = this.categoryService.sortedCategory(this.category)
      this.brandFilter = filterValue === '0' ? null : filterValue;
      this.filterProducts();
    })
    this.categoryService.sortChangeEvent.subscribe((value: string) => {
      this.sortValue = value
      this.sortProducts(this.sortValue);
    })
    this.loadMore()
  }

  loadMore() {
    const nextProducts = this.products.slice(this.currentIndex, this.currentIndex + STEP)
    this.displayedProducts = this.displayedProducts.concat(nextProducts)
    this.currentIndex += STEP

    if (this.currentIndex >= this.products.length) {
      this.noMoreProducts = true
    }
  }
  private filterProducts() {
    this.products = this.products.filter(product => {
      const priceCondition = this.priceFilter ? product.price <= this.priceFilter : true
      const brandCondition = this.brandFilter ? product.brand === this.brandFilter : true
      return priceCondition && brandCondition;
    });
    this.displayedProducts = this.products.slice(0, this.currentIndex)
  }

  sortProducts(option: string) {
    switch (option) {
      case '1':
        this.products.sort((a, b) => a.title.localeCompare(b.title))
        break
      case '2':
        this.products.sort((a, b) => b.title.localeCompare(a.title))
        break
      case '3':
        this.products.sort((a, b) => a.price - b.price)
        break
      case '4':
        this.products.sort((a, b) => b.price - a.price)
        break
      default:
        this.products.sort((a, b) => a.title.localeCompare(b.title))
        break
    }
    this.displayedProducts = this.products.slice(0, this.currentIndex)
  }
}
