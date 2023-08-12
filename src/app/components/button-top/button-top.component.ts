import { Component } from '@angular/core';
import {debounceTime, fromEvent, map} from "rxjs";

@Component({
  selector: 'app-button-top',
  templateUrl: './button-top.component.html',
  styleUrls: ['./button-top.component.css']
})
export class ButtonTopComponent {
  showBtn = fromEvent(document, 'scroll').pipe(
    debounceTime(50),
    map(() => window.scrollY > 200),
  );

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
