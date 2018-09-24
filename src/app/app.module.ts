import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// import './polyfills';


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppMaterialModule} from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { ExperienceInfoComponent } from './experience-info/experience-info.component';
import { ProjectsInfoComponent } from './projects-info/projects-info.component';
import { AboutInfoComponent } from './about-info/about-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { SkillsInfoComponent } from './skills-info/skills-info.component';
import { SkillTableComponent } from './skill-table/skill-table.component';
import { ContentsComponent } from './contents/contents.component';
import { HomeComponent } from './home/home.component';
import { ExpTimelineComponent } from './exp-timeline/exp-timeline.component';
import { ContactCardComponent } from './contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BasicInfoComponent,
    ExperienceInfoComponent,
    ProjectsInfoComponent,
    AboutInfoComponent,
    ContactInfoComponent,
    SkillsInfoComponent,
    SkillTableComponent,
    ContentsComponent,
    HomeComponent,
    ExpTimelineComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AppRoutingModule,
    NgbModule,
    NgxPageScrollModule,
    MDBBootstrapModule.forRoot()

  ],
  // exports: [
  //   NgbModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
