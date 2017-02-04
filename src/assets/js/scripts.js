function Card (index, color) {
    this.index = index,
    this.color = color,
    this.width = "500px",
    this.height = "500px"
};

Card.prototype.slide1 = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card1";

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

Card.prototype.slide2 = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card2";

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

Card.prototype.slide2A = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card2";
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
};

Card.prototype.slide3 = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card3";
  $(trigger).click(function(){
    if($(otherCard).hasClass('appear')) {
      $(otherCard).addClass('fly');
      setTimeout(function(){
        $(otherCard).removeClass('appear');
        $(otherCard).removeClass('fly');
        $(cardId).addClass('appear');
      }, 500);
      $(cardId).addClass('fadeInUp');
      $(cardId).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(cardId).removeClass('fadeInUp');
      });
    }
  });
}

Card.prototype.slide3A = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card3";
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
};

Card.prototype.slide4 = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card4";

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
};

Card.prototype.slide4A = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card4";
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
};

Card.prototype.slide5 = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card5";

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
};

Card.prototype.slide5A = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card5";
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
};

Card.prototype.slide6 = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card6";

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
};

Card.prototype.slide6A = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card6";
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
};

Card.prototype.slide7 = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card7";

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
};

Card.prototype.slide7A = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card7";
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
};

x = function() {
  var card1 = new Card(1, "blue");
  var card2 = new Card(2, "pink");
  var card3 = new Card(3, "orange");
  var card4 = new Card(4, "red");
  var card5 = new Card(5, "green");
  var card6 = new Card(6, "darkblue");
  var card7 = new Card(7, "black");

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
    card2.slide3A();
    card2.slide4A();
    card2.slide5();
    card2.slide6();
    card2.slide7A();
    card3.slide1();
    card3.slide2();
    card3.slide4A();
    card3.slide5();
    card3.slide6();
    card3.slide7();
    card4.slide1();
    card4.slide2();
    card4.slide3A();
    card4.slide5A();
    card4.slide6();
    card4.slide7();
    card5.slide1();
    card5.slide2();
    card5.slide3();
    card5.slide4A();
    card5.slide6A();
    card5.slide7A();
    card6.slide1();
    card6.slide2A();
    card6.slide3();
    card6.slide4A();
    card6.slide5();
    card6.slide7();
    card7.slide1();
    card7.slide2();
    card7.slide3();
    card7.slide4A();
    card7.slide5A();
    card7.slide6A();

  $('#card1').addClass('appear');
};

  $( document ).ready(function(){
    x();
    console.log("script first");
  });

  function openNav() {
      document.getElementById("mySidenav").style.width = "250px";;
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.body.style.backgroundColor = "white";
  }


  function openClose() {
    var width = $("#mySidenav").width();
    if (width == 250){
      closeNav();
    } else if (width == 0){
      openNav();
    }
  }

  // $(function() {
  //   var iconWidth = $(".list-menu").width
  //   if(iconWidth) <= 1000) {
  //     $(".list-menu").each(function() {
  //       $(this).attr("src", $(this).attr("src").replace("images/620x410/", "images/310x205/"));
  //     });
  //   }
  // });

// module.exports = Slider;
