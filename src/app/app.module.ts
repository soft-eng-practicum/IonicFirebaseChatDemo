import { ChatPage } from './../pages/chat/chat';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebase = {
  apiKey: "AIzaSyC-TIHLbKsNPKhsPM68zqAaME-uC5iLZ3E",
    authDomain: "dummyproject-5b1ac.firebaseapp.com",
    databaseURL: "https://dummyproject-5b1ac.firebaseio.com",
    projectId: "dummyproject-5b1ac",
    storageBucket: "dummyproject-5b1ac.appspot.com",
    messagingSenderId: "2114521196"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
