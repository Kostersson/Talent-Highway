import { NgModule }      from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule }   from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { AngularFireModule } from 'angularfire2'

import {SkillSearchComponent} from './skillSearch/skill-search.component';
import {SkillsPipe} from "./pipes/skills.pipe";
import {AppComponent} from "./app.component";



// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCH-y6QAfontuAQludOuyGuxT2mc7Q5J0Q",
  authDomain: "solinortalenthighway.firebaseapp.com",
  databaseURL: "https://solinortalenthighway.firebaseio.com",
  storageBucket: "solinortalenthighway.appspot.com",
  messagingSenderId: "299178092824"
};

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'search',
        component: SkillSearchComponent
      }
    ]),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  declarations: [ SkillsPipe, SkillSearchComponent, AppComponent],
  bootstrap:    [ SkillSearchComponent ]
})
export class AppModule { }
