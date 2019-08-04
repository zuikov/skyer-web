import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {
  public imageId: string;

  ngOnInit() {
    this.setImageId("skyer-cabin-closed");
  }
  
  public setImageId(imageId) {
    this.imageId = imageId;
  }
}
