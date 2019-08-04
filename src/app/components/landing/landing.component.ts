import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  screenWidth: number;
  showFiller: boolean;

  constructor() {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
    this.screenWidth = window.innerWidth;
    };
   }

  ngOnInit() {
  }
  
}
