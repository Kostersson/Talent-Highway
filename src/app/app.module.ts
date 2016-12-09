import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

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

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}


