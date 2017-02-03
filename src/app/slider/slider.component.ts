import { Component, OnInit } from '@angular/core';
import { test } from '../../assets/js/test';
// declare var x: any;
// import '../../assets/js/scripts';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let x : any;
    console.log(x);
    console.log("running");
  }

}
