import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  currentCard: string;

  constructor() {
    this.currentCard = 'card1';
  }

  ngOnInit() {
    $('#card1').addClass('appear');
  }

  changeCard(nextCard: string) {
    if($('.card1').hasClass('appear')) {
      this.currentCard = ('card1');
    };
    if($('.card2').hasClass('appear')) {
      this.currentCard = ('card2');
    };
    if($('.card3').hasClass('appear')) {
      this.currentCard = ('card3');
    };
    if($('.card4').hasClass('appear')) {
      this.currentCard = ('card4');
    };
    if($('.card5').hasClass('appear')) {
      this.currentCard = ('card5');
    };
    if($('.card6').hasClass('appear')) {
      this.currentCard = ('card6');
    };
    if($('.card7').hasClass('appear')) {
      this.currentCard = ('card7');
    };
    console.log("currentCard: " + this.currentCard);
    console.log("nextCard: " + nextCard);
    $('.' + this.currentCard).addClass('fly');
    setTimeout(function(){
      $('.' + this.currentCard).removeClass('appear');
      $('.' + this.currentCard).removeClass('fly');
      $('.' + nextCard).addClass('appear');
    }, 500);
    $('#' + nextCard).addClass('animated fadeInUp');
    $('#' + nextCard).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#' + nextCard).removeClass('fadeInUp');
    });
  }

//     $('#card1').addClass('fadeInUp');
//     $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//       $('#card1').removeClass('fadeInUp');
//     });
//     $('.trigger1').click(function(){
//       if($('.card2').hasClass('appear')) { $('.card2').addClass('fly');
//       setTimeout(function(){$('.card2').removeClass('appear'); $('#card1').addClass('appear');}, 500);
//       $('.card1').addClass('fadeInUp');
//       $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card1').removeClass('fadeInUp'); $('.card2').removeClass('fly');
//       });
//     } else if($('.card3').hasClass('appear')) {
//         $('.card3').addClass('fly');
//         setTimeout(function(){
//           $('.card3').removeClass('appear');
//           $('#card1').addClass('appear');
//         }, 500);
//         $('.card1').addClass('fadeInUp');
//         $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card1').removeClass('fadeInUp');
//           $('.card3').removeClass('fly');
//         });
//       } else if($('.card4').hasClass('appear')) {
//         $('.card4').addClass('fly');
//         setTimeout(function(){
//           $('.card4').removeClass('appear');
//           $('#card1').addClass('appear');
//         }, 500);
//         $('.card1').addClass('fadeInUp');
//         $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card1').removeClass('fadeInUp');
//           $('.card4').removeClass('fly');
//         });
//       } else if($('.card5').hasClass('appear')) {
//         $('.card5').addClass('fly');
//         setTimeout(function(){
//           $('.card5').removeClass('appear');
//           $('#card1').addClass('appear');
//         }, 500);
//         $('.card1').addClass('fadeInUp');
//         $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card1').removeClass('fadeInUp');
//           $('.card5').removeClass('fly');
//         });
//       } else if($('.card6').hasClass('appear')) {
//         $('.card6').addClass('fly');
//         setTimeout(function(){
//           $('.card6').removeClass('appear');
//           $('#card1').addClass('appear');
//         }, 500);
//         $('.card1').addClass('fadeInUp');
//         $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card1').removeClass('fadeInUp');
//           $('.card6').removeClass('fly');
//         });
//         } else if($('.card7').hasClass('appear')) {
//           $('.card7').addClass('fly');
//           setTimeout(function(){
//             $('.card7').removeClass('appear');
//             $('#card1').addClass('appear');
//           }, 500);
//           $('#card1').addClass('fadeInUp');
//           $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//             $('#card1').removeClass('fadeInUp');
//             $('.card7').removeClass('fly');
//           });
//       }});
// // card 2
//     $('.trigger2').click(function(){
//       if ($('.card1').hasClass('appear')) {
//         $('.card1').addClass('fly');
//         setTimeout(function(){
//           $('.card1').removeClass('appear');
//           $('.card1').removeClass('fly');
//           $('.card2').addClass('appear');
//         }, 500);
//         $('#card2').addClass('animated fadeInUp');
//         $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card2').removeClass('fadeInUp');
//         });
//       } else if($('.card3').hasClass('appear')) {
//         $('.card3').addClass('fly');
//         setTimeout(function(){
//           $('.card3').removeClass('appear');
//           $('.card3').removeClass('fly');
//           $('#card2').addClass('appear');
//         }, 500);
//         $('#card2').addClass('animated fadeInUp');
//         $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card2').removeClass('fadeInUp');
//         });
//       } else if($('.card4').hasClass('appear')) {
//         $('.card4').addClass('fly');
//         setTimeout(function(){
//           $('.card4').removeClass('appear');
//           $('.card4').removeClass('fly');
//           $('#card2').addClass('appear');
//         }, 500);
//         $('#card2').addClass('animated fadeInUp');
//         $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card2').removeClass('fadeInUp');
//         });
//       } else if($('.card5').hasClass('appear')) {
//         $('.card5').addClass('fly');
//         $('.card2').addClass('appear');
//         setTimeout(function(){
//           $('.card5').removeClass('appear');
//           $('.card5').removeClass('fly');
//         }, 500);
//         $('#card2').addClass('animated fadeInUp');
//         $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card2').removeClass('fadeInUp');
//         })
//       } else if($('.card6').hasClass('appear')) {
//         $('.card6').addClass('fly');
//         $('.card2').addClass('appear');
//         setTimeout(function(){
//           $('.card6').removeClass('appear');
//           $('.card6').removeClass('fly');
//         }, 500);
//         $('#card2').addClass('animated fadeInUp');
//         $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card2').removeClass('fadeInUp');
//         })
//     } else if ($('.card7').hasClass('appear')) {
//           $('.card7').addClass('fly');
//           setTimeout(function(){
//             $('.card7').removeClass('appear');
//             $('.card7').removeClass('fly');
//             $('#card2').addClass('appear');
//           }, 500);
//           $('#card2').addClass('animated fadeInUp');
//           $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//             $('#card2').removeClass('fadeInUp');
//           });
//       }
//     });
// // card 3
//   $('.trigger3').click(function(){
//     if ($('.card1').hasClass('appear')) {
//       $('.card1').addClass('fly');
//       setTimeout(function(){
//         $('.card1').removeClass('appear');
//         $('.card1').removeClass('fly');
//         $('#card3').addClass('appear');
//       }, 500);
//       $('#card3').addClass('animated fadeInUp');
//       $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card3').removeClass('fadeInUp');
//       });
//
//     } else if($('.card2').hasClass('appear')) {
//         $('.card2').addClass('fly');
//         setTimeout(function(){
//           $('.card2').removeClass('appear');
//           $('.card2').removeClass('fly');
//           $('#card3').addClass('appear');
//         }, 500);
//         $('#card3').addClass('animated fadeInUp');
//         $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card3').removeClass('fadeInUp');
//         });
//     } else if($('.card4').hasClass('appear')) {
//       $('.card4').addClass('fly');
//       setTimeout(function(){
//         $('.card4').removeClass('appear');
//         $('.card4').removeClass('fly');
//         $('#card3').addClass('appear');
//       }, 500);
//       $('#card3').addClass('animated fadeInUp');
//       $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card3').removeClass('fadeInUp');
//       });
//     } else if($('.card5').hasClass('appear')) {
//       $('.card5').addClass('fly');
//       setTimeout(function(){
//         $('.card5').removeClass('appear');
//         $('.card5').removeClass('fly');
//         $('#card3').addClass('appear');
//       }, 500);
//       $('#card3').addClass('animated fadeInUp');
//       $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card3').removeClass('fadeInUp');
//       });
//     } else if($('.card6').hasClass('appear')) {
//       $('.card6').addClass('fly');
//       setTimeout(function(){
//         $('.card6').removeClass('appear');
//         $('#card3').addClass('appear');
//       }, 500);
//       $('#card3').addClass('fadeInUp');
//       $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card3').removeClass('fadeInUp');
//         $('.card6').removeClass('fly');
//       });
//     } else if($('.card7').hasClass('appear')) {
//       $('.card7').addClass('fly');
//       setTimeout(function(){
//         $('.card7').removeClass('appear');
//         $('#card3').addClass('appear');
//       }, 500);
//       $('#card3').addClass('fadeInUp');
//       $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card3').removeClass('fadeInUp');
//         $('.card7').removeClass('fly');
//       });
//     }
//   });
// // card 4
//   $('.trigger4').click(function(){
//     if($('.card1').hasClass('appear')) {
//       $('.card1').addClass('fly');
//       setTimeout(function(){
//         $('.card1').removeClass('appear');
//         $('.card1').removeClass('fly');
//         $('#card4').addClass('appear');
//       }, 500);
//       $('#card4').addClass('animated fadeInUp');
//       $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card4').removeClass('fadeInUp');
//       });
//     } else if($('.card2').hasClass('appear')) {
//         $('.card2').addClass('fly');
//         setTimeout(function(){
//           $('.card2').removeClass('appear');
//           $('#card4').addClass('appear');
//         }, 500);
//         $('#card4').addClass('fadeInUp');
//         $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card4').removeClass('fadeInUp');
//           $('.card2').removeClass('fly');
//         });
//       } else if($('.card3').hasClass('appear')) {
//         $('.card3').addClass('fly');
//         setTimeout(function(){
//           $('.card3').removeClass('appear');
//           $('.card3').removeClass('fly');
//           $('#card4').addClass('appear');
//         }, 500);
//         $('#card4').addClass('animated fadeInUp');
//         $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card4').removeClass('fadeInUp');
//         });
//       } else if($('.card5').hasClass('appear')) {
//         $('.card5').addClass('fly');
//         setTimeout(function(){
//           $('.card5').removeClass('appear');
//           $('.card5').removeClass('fly');
//           $('#card4').addClass('appear');
//         }, 500);
//         $('#card4').addClass('animated fadeInUp');
//         $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card4').removeClass('fadeInUp');
//         });
//
//     } else if($('.card6').hasClass('appear')) {
//       $('.card6').addClass('fly');
//       $('.card4').addClass('appear');
//       setTimeout(function(){
//         $('.card6').removeClass('appear');
//         $('.card6').removeClass('fly');
//       }, 500);
//       $('#card4').addClass('animated fadeInUp');
//       $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card4').removeClass('fadeInUp');
//       })
//     } else if($('.card7').hasClass('appear')) {
//       $('.card7').addClass('fly');
//       setTimeout(function(){
//         $('.card7').removeClass('appear');
//         $('#card4').addClass('appear');
//       }, 500);
//       $('#card4').addClass('fadeInUp');
//       $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card4').removeClass('fadeInUp');
//         $('.card7').removeClass('fly');
//       });
//     }
//   });
// //card 5
//   $('.trigger5').click(function(){
//     if($('.card1').hasClass('appear')) {
//       $('.card1').addClass('fly');
//       setTimeout(function(){
//         $('.card1').removeClass('appear');
//         $('.card1').removeClass('fly');
//         $('#card5').addClass('appear');
//       }, 500);
//       $('#card5').addClass('animated fadeInUp');
//       $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card5').removeClass('fadeInUp');
//       });
//     } else if($('.card2').hasClass('appear')) {
//         $('.card2').addClass('fly');
//         setTimeout(function(){
//           $('.card2').removeClass('appear');
//           $('#card5').addClass('appear');
//         }, 500);
//         $('#card5').addClass('fadeInUp');
//         $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card5').removeClass('fadeInUp');
//           $('.card2').removeClass('fly');
//         });
//     } else if($('.card3').hasClass('appear')) {
//             $('.card3').addClass('fly');
//             setTimeout(function(){
//               $('.card3').removeClass('appear');
//               $('.card3').removeClass('fly');
//               $('#card5').addClass('appear');
//             }, 500);
//             $('#card5').addClass('animated fadeInUp');
//             $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//               $('#card5').removeClass('fadeInUp');
//             });
//     } else if($('.card4').hasClass('appear')) {
//       $('.card4').addClass('fly');
//       setTimeout(function(){
//         $('.card4').removeClass('appear');
//         $('.card4').removeClass('fly');
//         $('#card5').addClass('appear');
//       }, 500);
//       $('#card5').addClass('animated fadeInUp');
//       $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card5').removeClass('fadeInUp');
//       });
//     } else if($('.card6').hasClass('appear')) {
//             $('.card6').addClass('fly');
//             setTimeout(function(){
//               $('.card6').removeClass('appear');
//               $('.card6').removeClass('fly');
//               $('#card5').addClass('appear');
//             }, 500);
//             $('#card5').addClass('animated fadeInUp');
//             $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//               $('#card5').removeClass('fadeInUp');
//             });
//     } else if ($('.card7').hasClass('appear')) {
//           $('.card7').addClass('fly');
//           setTimeout(function(){
//             $('.card7').removeClass('appear');
//             $('.card7').removeClass('fly');
//             $('#card5').addClass('appear');
//           }, 500);
//           $('#card5').addClass('animated fadeInUp');
//           $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//             $('#card5').removeClass('fadeInUp');
//       });
//     }
//   });
// //card 6
//   $('.trigger6').click(function(){
//     if($('.card1').hasClass('appear')) {
//       $('.card1').addClass('fly');
//       setTimeout(function(){
//         $('.card1').removeClass('appear');
//         $('.card1').removeClass('fly');
//         $('#card6').addClass('appear');
//       }, 500);
//       $('#card6').addClass('animated fadeInUp');
//       $('#card6').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card6').removeClass('fadeInUp');
//       });
//     } else if($('.card2').hasClass('appear')) {
//       $('.card2').addClass('fly');
//       setTimeout(function(){
//         $('.card2').removeClass('appear');
//         $('.card2').removeClass('fly');
//         $('#card6').addClass('appear');
//       }, 500);
//       $('#card6').addClass('animated fadeInUp');
//       $('#card6').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card6').removeClass('fadeInUp');
//       });
//     } else if($('.card3').hasClass('appear')) {
//      $('.card3').addClass('fly');
//      setTimeout(function(){
//        $('.card3').removeClass('appear');
//        $('.card3').removeClass('fly');
//        $('#card6').addClass('appear');
//      }, 500);
//      $('#card6').addClass('animated fadeInUp');
//      $('#card6').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//        $('#card6').removeClass('fadeInUp');
//      });
//     } else if($('.card4').hasClass('appear')) {
//       $('.card4').addClass('fly');
//       setTimeout(function(){
//         $('.card4').removeClass('appear');
//         $('.card4').removeClass('fly');
//         $('#card6').addClass('appear');
//       }, 500);
//       $('#card6').addClass('animated fadeInUp');
//       $('#card6').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card6').removeClass('fadeInUp');
//       });
//     // } else if($('.card5').hasClass('appear')) {
//     //     $('.card5').addClass('fly');
//     //     setTimeout(function(){
//     //       $('.card5').removeClass('appear');
//     //       $('#card6').addClass('appear');
//     //     }, 500);
//     //     $('#card6').addClass('fadeInUp');
//     //     $('#card6').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//     //       $('#card6').removeClass('fadeInUp');
//     //       $('.card5').removeClass('fly');
//     //     });
//
//             } else if($('.card5').hasClass('appear')) {
//       $('.card5').addClass('fly');
//       setTimeout(function(){
//         $('.card5').removeClass('appear');
//         $('.card5').removeClass('fly');
//         $('#card6').addClass('appear');
//       }, 500);
//       $('#card6').addClass('animated fadeInUp');
//       $('#card6').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card6').removeClass('fadeInUp');
//       });
//       } else if($('.card7').hasClass('appear')) {
//         $('.card7').addClass('fly');
//         setTimeout(function(){
//           $('.card7').removeClass('appear');
//           $('#card6').addClass('appear');
//         }, 500);
//         $('#card6').addClass('fadeInUp');
//         $('#card6').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card6').removeClass('fadeInUp');
//           $('.card7').removeClass('fly');
//         });
//     }
//   });
// //card 7
//   $('.trigger7').click(function(){
//     if($('.card1').hasClass('appear')) {
//       $('.card1').addClass('fly');
//       setTimeout(function(){
//         $('.card1').removeClass('appear');
//         $('.card1').removeClass('fly');
//         $('#card7').addClass('appear');
//       }, 500);
//       $('#card7').addClass('animated fadeInUp');
//       $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card7').removeClass('fadeInUp');
//       });
//     } else if($('.card2').hasClass('appear')) {
//         $('.card2').addClass('fly');
//         setTimeout(function(){
//           $('.card2').removeClass('appear');
//           $('#card7').addClass('appear');
//         }, 500);
//         $('#card7').addClass('fadeInUp');
//         $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card7').removeClass('fadeInUp');
//           $('.card2').removeClass('fly');
//         });
//     } else if($('.card3').hasClass('appear')) {
//       $('.card3').addClass('fly');
//       setTimeout(function(){
//         $('.card3').removeClass('appear');
//         $('.card3').removeClass('fly');
//         $('#card7').addClass('appear');
//       }, 500);
//       $('#card7').addClass('animated fadeInUp');
//       $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $('#card7').removeClass('fadeInUp');
//       });
//
//     } else if($('.card5').hasClass('appear')) {
//         $('.card5').addClass('fly');
//         setTimeout(function(){
//           $('.card5').removeClass('appear');
//           $('.card5').removeClass('fly');
//           $('#card7').addClass('appear');
//         }, 500);
//         $('#card7').addClass('animated fadeInUp');
//         $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card7').removeClass('fadeInUp');
//         });
//       } else if($('.card6').hasClass('appear')) {
//         $('.card6').addClass('fly');
//         setTimeout(function(){
//           $('.card6').removeClass('appear');
//           $('.card6').removeClass('fly');
//           $('#card7').addClass('appear');
//         }, 500);
//         $('#card7').addClass('animated fadeInUp');
//         $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $('#card7').removeClass('fadeInUp');
//         });
//       }
//   });
//   }
}
