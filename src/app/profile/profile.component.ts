import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

personProfile: FirebaseObjectObservable<any>;
constructor(af: AngularFire) {
  af.auth.login();
  this.personProfile = af.database.object('/people/1');
}

  ngOnInit() {
  }

}
