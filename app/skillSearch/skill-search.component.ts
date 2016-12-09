import {Component} from '@angular/core';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Person} from "../entities/Person";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Skill} from "../entities/Skill";



@Component({
  selector: 'my-app',
  templateUrl: 'app/skillSearch/skill-search.component.html',
  styleUrls: ['app/skillSearch/skill-search.component.css']
})
export class SkillSearchComponent {

  people: Person[];
  skills: FirebaseListObservable<any[]>;
  selected: string[];
  query: string;
  filtered: string[];

  constructor(af: AngularFire) {
    this.people = [];
    //const itemObservable = af.database.object('/skill');
    //itemObservable.set(new Skill("java"));

    //this.skills = af.database.list('/skills');
    this.selected = [];
    this.filtered = [];
  }

  select(item: any) {
    this.selected.push(item);
    this.query = '';
    this.filtered = [];
  }

  remove(item: any) {
    this.selected.splice(this.selected.indexOf(item), 1);
  }

  search = () => {
    return;
  }
}
