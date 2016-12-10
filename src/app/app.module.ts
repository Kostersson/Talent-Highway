import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { SearchComponent } from './search/search.component';
import { FirebasetestComponent } from './firebasetest/firebasetest.component';
import { FormsModule }   from '@angular/forms';
import { PersonCardComponent } from './person-card/person-card.component';
import { KeyValuePipePipe } from './key-value-pipe.pipe';

// Must export the config
const firebaseConfig = {
  apiKey: "AIzaSyCH-y6QAfontuAQludOuyGuxT2mc7Q5J0Q",
  authDomain: "solinortalenthighway.firebaseapp.com",
  databaseURL: "https://solinortalenthighway.firebaseio.com",
  storageBucket: "solinortalenthighway.appspot.com",
  messagingSenderId: "299178092824"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous
};

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'firebase', component: FirebasetestComponent },
  { path: 'person', component: PersonCardComponent },
  { path: '', component: SearchComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  declarations: [ AppComponent, SearchComponent, FirebasetestComponent, PersonCardComponent, KeyValuePipePipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}


