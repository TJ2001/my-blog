import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
declare var JQuery: any;


@Component({
  selector: 'my-jquery',
  template: `<button>Click me</button>`
})
export class jQueryComponent implements OnInit {

    ngOnInit():any {
      jQuery(this._elREf.nativeElement).find('button').on('click', function(){
        alert!("it works");
    });

  }
}
