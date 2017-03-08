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
      // $(".disappear").css("display", "none");
    });

    $(".submit").on('click', function() {
      $(this).parent().parent().hide(300);
      $(".ok_message").addClass("active");
    });

    $(".ok_message").on('click', function() {
      $(this).removeClass("active");
      $(".form").removeClass("active").show();
    });

  }

}
