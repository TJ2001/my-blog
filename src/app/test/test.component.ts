import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  index: string;
  color: string;
  width: "500px";
  height: "500px";


  constructor() {
   }

  ngOnInit() {
  }

}
