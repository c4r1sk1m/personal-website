import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.css']
})
export class ProjectShowcaseComponent implements OnInit {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/PersonalPage.PNG' },
      { name: 'assets/profile_picture.jpg' },
      { name: 'assets/profile_picture.jpg' },
      { name: 'assets/PersonalPage.PNG' },
      { name: 'assets/PersonalPage.PNG' },
      { name: 'assets/profile_picture.jpg' },
      { name: 'assets/PersonalPage.PNG' },
      { name: 'assets/profile_picture.jpg' },

    ];


  }

  ngOnInit() {
  }

}



