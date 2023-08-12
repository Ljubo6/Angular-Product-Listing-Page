import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {
  @Input() rating!: number
  fullStars!: number[]
  emptyStars!: number[]
  hasHalfStar!: boolean

  ngOnChanges() {
    this.calculateStars();
  }

  private calculateStars() {
    const fullStarsCount = Math.floor(this.rating)
    const hasHalfStar = this.rating - fullStarsCount >= 0.5
    const emptyStarsCount = 5 - fullStarsCount - (hasHalfStar ? 1 : 0)

    this.fullStars = Array(fullStarsCount).fill(0)
    this.emptyStars = Array(emptyStarsCount).fill(0)
    this.hasHalfStar = hasHalfStar
  }
}

