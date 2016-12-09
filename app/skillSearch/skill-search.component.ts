import {Component} from '@angular/core';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'my-app',
  templateUrl: 'app/skillSearch/skill-search.component.html',
  styleUrls: ['app/skillSearch/skill-search.component.css']
})
export class SkillSearchComponent {

  people: any;
  skills: string[];
  selected: string[];
  query: string;
  filtered: string[];

  constructor() {
    this.people = [
      {
        name: 'jaska',
        skills: ['scala', 'java', 'php']
      },
      {
        name: 'pera',
        skills: ['python', 'c']
      },
      {
        name: 'jukka',
        skills: ['scala', 'c++', 'c']
      },
      {
        name: 'antti',
        skills: ['cobol', 'c++', 'c']
      },
      {
        name: 'jaakko',
        skills: ['c', 'c++', 'c#']
      }
    ];
    this.skills = ['scala', 'java', 'php', 'python', 'c', 'c++'];
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
    this.filtered = _.filter(this.skills, (o: string) => {
      return o.startsWith(this.query);
    });
  }
}
