import { Injectable } from '@angular/core';
import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FilterService {
  priceFilterSubject: Subject<string> = new Subject<string>();
  brandFilterSubject: Subject<string> = new Subject<string>();
  constructor() {
  }
}
