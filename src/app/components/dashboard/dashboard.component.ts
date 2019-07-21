import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // public onToggleSidenav = () => {
  //   this.sidenavToggle.emit();
  //   console.log('onToggleSidenav works !');
  // }

}
