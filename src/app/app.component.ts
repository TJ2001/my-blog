import { Component } from '@angular/core';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
      PageScrollConfig.defaultScrollOffset = 100;
      PageScrollConfig.defaultEasingLogic = {
        ease: (t: number, b: number, c: number, d: number): number => {
          t /= d/2;
        	if (t < 1) return c/2*t*t + b;
        	t--;
        	return -c/2 * (t*(t-2) - 1) + b;
        }
    };
  }
}
