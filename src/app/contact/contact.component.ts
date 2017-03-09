import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".form").on('click', function(){
      $(this).addClass('active');
      $("input").addClass('active');
      $("textarea").addClass('active');
    });

    $(".submit").on('click', function() {
      $(this).parent().parent().hide(300);
      $(".thanks").addClass("active");
    });

    $(".thanks").on('click', function() {
      $(this).removeClass("active");
      $(".form").removeClass("active").show();
    });

  }

}
