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
  show: any[];
  query: string;

  constructor(af: AngularFire) {
    af.auth.login();
    this.skills = af.database.list('/skills');
    this.query = "";
    this.show = [];
  }

  search = () => {
    let retu = this.skills.map((skills: any[]) => {
      console.log(skills);
      this.show = skills.filter((skill: any) => {
        return skill.$value.startsWith(this.query) && this.query != '';
      });
      return skills;
    });
    return retu;
  };

  log(x:any) {
    console.log(x);
  }

  ngOnInit() {
  }

}
