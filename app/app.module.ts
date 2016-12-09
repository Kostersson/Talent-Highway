import { NgModule }      from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FooComponent} from './skillSearch/skill-search.component';
import {SkillsPipe} from "./pipes/skills.pipe";

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule.forRoot() ],
  declarations: [ SkillsPipe,FooComponent],
  bootstrap:    [ FooComponent ]
})
export class AppModule { }
