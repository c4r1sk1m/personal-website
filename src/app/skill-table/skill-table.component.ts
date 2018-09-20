import { Component, OnInit } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


export interface Skill {
  skill: string;
  ability: number;
}






@Component({
  selector: 'app-skill-table',
  templateUrl: './skill-table.component.html',
  styleUrls: ['./skill-table.component.css']
})
export class SkillTableComponent implements OnInit {
  displayedColumns: string[] = ['skill', 'ability'];

  skills: Skill [] = [
    {skill: 'Java', ability: 70},
    {skill: 'Python', ability: 80},
    {skill: 'Web Development', ability: 80},
    {skill: 'Cyber Security', ability: 65},
    {skill: 'Networking (Routing & Switching)', ability: 65},
    {skill: 'Music Production', ability: 60},
  ];





  constructor() { }

  ngOnInit() {

  }

}
