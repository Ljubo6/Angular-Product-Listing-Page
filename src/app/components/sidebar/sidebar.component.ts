import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FilterService} from "../../services/filter.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements  OnInit{
  isDisplay: boolean = false
  selected:boolean = true

  @ViewChild('priceSelect') priceSelect!: ElementRef
  @ViewChild('brandSelect') brandSelect!: ElementRef

  constructor(private filterService: FilterService,
              private router: Router
              ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.resetOptionValues()
      }
    })
  }

  onPriceFilterChange(event: any) {
    const selectedValue = event.target.value
    this.filterService.priceFilterSubject.next(selectedValue)
  }

  onBrandFilterChange(event: any) {
    const selectedValue = event.target.value
    this.filterService.brandFilterSubject.next(selectedValue)
  }

  ngOnInit(): void {
    this.selected = true
  }
  resetOptionValues() {
    if (this.priceSelect && this.brandSelect) {
      this.priceSelect.nativeElement.value = '0'
      this.brandSelect.nativeElement.value = '0'
    }
  }
}
