import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  screenWidth: number;

  // @Output() public sidenavToggle = new EventEmitter();

  constructor() {
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
    // set screenWidth on screen size change
    this.screenWidth = window.innerWidth;
    };
   }

  ngOnInit() {
  }
  
  // public onToggleSidenav = () => {
  //   this.sidenavToggle.emit();
  //   console.log('onToggleSidenav works !');
  // }

}
