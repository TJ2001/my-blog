import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() { }
  openNav() {
    if(window.matchMedia("(min-width: 400px)").matches){
      document.getElementById("mySidenav").style.width = "300px";
    }else if (window.matchMedia("(max-width: 400px)").matches){
      document.getElementById("mySidenav").style.width = "100%";
    };
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
  }

  openClose() {
    var width = document.getElementById("mySidenav").offsetWidth;
    console.log(width);
    if (width == 0){
      this.openNav();
    } else {
      this.closeNav();
    }
  }

}
