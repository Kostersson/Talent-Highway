import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-firebasetest',
  templateUrl: './firebasetest.component.html',
  styleUrls: ['./firebasetest.component.css']
})
export class FirebasetestComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    af.auth.login();
    this.items = af.database.list('/items');
  }

  ngOnInit() {

  }
}
