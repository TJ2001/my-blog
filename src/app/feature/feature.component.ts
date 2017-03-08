import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // if (window.matchMedia('(max-width: 500px)').matches){
    //   $(".artboard").addClass('container');
    //
    // }
  }

}
