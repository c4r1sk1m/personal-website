import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AboutInfoComponent} from './about-info/about-info.component';
import { BasicInfoComponent} from './basic-info/basic-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ExperienceInfoComponent } from './experience-info/experience-info.component';
import { ProjectsInfoComponent } from './projects-info/projects-info.component';
import { SkillsInfoComponent} from './skills-info/skills-info.component';
import { HomeComponent} from './home/home.component';
import {AnimationComponent} from './animation/animation.component';


const routes: Routes = [
  // {path: 'about', component: AboutInfoComponent},
  // {path: 'contact', component: ContactInfoComponent},
  // {path: 'experience', component: ExperienceInfoComponent},
  {path: 'projects', component: ProjectsInfoComponent},
  {path: '', component: HomeComponent},
  // {path: 'skills', component: SkillsInfoComponent},
  {path: '', component: AnimationComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];



@NgModule({

  exports: [
    RouterModule
  ],


  imports: [
    RouterModule.forRoot(routes )
  ],
  declarations: []
})
export class AppRoutingModule { }
