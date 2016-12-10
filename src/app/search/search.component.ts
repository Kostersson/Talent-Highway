import { Component, OnInit } from '@angular/core';
import {AngularFire,FirebaseListObservable} from "angularfire2";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import * as _ from 'lodash'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  skills: FirebaseListObservable<any[]>;
  selected: any[];
  query: string;
  result: Observable<any[]>;

  constructor(af: AngularFire) {
    af.auth.login();
    this.skills = af.database.list('/skills');
    this.query = "";
    this.selected = [];
  }

  search = () => {
    this.result = this.skills.map((skills: any[]) => {
      return skills.filter((skill: any) => {
        return skill.$value.toLowerCase().startsWith(this.query.toLowerCase()) && this.query != '';
      });
    });
  };

  select(item: any) {
    this.selected.push(item);
    this.query = '';
  }

  remove(item: any) {
    this.selected.splice(this.selected.indexOf(item), 1);
  }

  log(x:any) {
    console.log(x);
  }

  ngOnInit() {
  }

}
