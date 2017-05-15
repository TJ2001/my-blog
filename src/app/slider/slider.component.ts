import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  function Card (index, color) {
      this.index = index,
      this.color = color,
      this.width = "500px",
      this.height = "500px"
  };

//possible rename of slide to pushUp

  function animation(trigger: string, cardId: string, otherCard: string){
    $(trigger).click(function(){
      if($(otherCard).hasClass('appear')) {
        $(otherCard).addClass('fly');
        setTimeout(function(){
          $(otherCard).removeClass('appear');
          $(otherCard).removeClass('fly');
          $(cardId).addClass('appear');
        }, 500);
        $(cardId).addClass('animated fadeInUp');
        $(cardId).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(cardId).removeClass('fadeInUp');
        });
      }
    });
  }

  function animationTwo(trigger: string, cardId: string, otherCard: string){
    $(trigger).click(function(){
      if($(otherCard).hasClass('appear')) {
        $(otherCard).addClass('fly');
        setTimeout(function(){
          $(otherCard).removeClass('appear');
          $(cardId).addClass('appear');
        }, 500);
        $(cardId).addClass('fadeInUp');
        $(cardId).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(cardId).removeClass('fadeInUp');
          $(otherCard).removeClass('fly');
        });
      }
    });
  }

  Card.prototype.slide1 = function(){
    let trigger = ".trigger" + this.index;
    let cardId = "#card" + this.index;
    let otherCard = ".card1";
    animation(trigger, cardId, otherCard);
  }

  Card.prototype.slide2 = function(){
    let trigger = ".trigger" + this.index;
    let cardId = "#card" + this.index;
    let otherCard = ".card2";
    animation(trigger, cardId, otherCard);
  };

  Card.prototype.slide3 = function(){
    let trigger = ".trigger" + this.index;
    let cardId = "#card" + this.index;
    let otherCard = ".card3";
    animation(trigger, cardId, otherCard);
  }

  Card.prototype.slide4 = function(){
    let trigger = ".trigger" + this.index;
    let cardId = "#card" + this.index;
    let otherCard = ".card4";
    animation(trigger, cardId, otherCard);
  };

  Card.prototype.slide5 = function(){
    let trigger = ".trigger" + this.index;
    let cardId = "#card" + this.index;
    let otherCard = ".card5";
    animation(trigger, cardId, otherCard);
  };

  Card.prototype.slide6 = function(){
    let trigger = ".trigger" + this.index;
    let cardId = "#card" + this.index;
    let otherCard = ".card6";
    animation(trigger, cardId, otherCard);
  };

  Card.prototype.slide7 = function(){
    let trigger = ".trigger" + this.index;
    let cardId = "#card" + this.index;
    let otherCard = ".card7";
    animation(trigger, cardId, otherCard);
  };

  let card1 = new Card(1, "blue");
  let card2 = new Card(2, "pink");
  let card3 = new Card(3, "orange");
  let card4 = new Card(4, "red");
  let card5 = new Card(5, "green");
  let card6 = new Card(6, "darkblue");
  let card7 = new Card(7, "black");

  card1.initiate = function(){
    card1.slide2();
    card1.slide3();
    card1.slide4();
    card1.slide5();
    card1.slide6();
    card1.slide7();
  };

  card1.initiate();
  card2.slide1();
  card2.slide3();
  card2.slide4();
  card2.slide5();
  card2.slide6();
  card2.slide7();

  card3.slide1();
  card3.slide2();
  card3.slide4();
  card3.slide5();
  card3.slide6();
  card3.slide7();

  card4.slide1();
  card4.slide2();
  card4.slide3();
  card4.slide5();
  card4.slide6();
  card4.slide7();

  card5.slide1();
  card5.slide2();
  card5.slide3();
  card5.slide4();
  card5.slide6();
  card5.slide7();

  card6.slide1();
  card6.slide2();
  card6.slide3();
  card6.slide4();
  card6.slide5();
  card6.slide7();

  card7.slide1();
  card7.slide2();
  card7.slide3();
  card7.slide4();
  card7.slide5();
  card7.slide6();

  $('#card1').addClass('appear');
  }
}
