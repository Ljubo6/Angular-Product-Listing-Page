import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css']
})
export class InputGroupComponent {
  @Input() numberOfProducts!:number
  @Input() category!:string
  @Output() selectChange:EventEmitter<string> = new EventEmitter<string>()

  constructor(private categoryService:CategoryService) {
  }

  onSelectChange(event: any) {
    const selectedValue = event.target.value
    this.selectChange.emit(selectedValue)
    this.categoryService.sortChangeEvent.next(selectedValue)
  }
}
