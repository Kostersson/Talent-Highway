import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {
  person: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
    af.auth.login();
    this.person = af.database.object('/people/1');
  }

  ngOnInit() {
  }

}
