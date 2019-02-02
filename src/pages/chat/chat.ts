import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
* Generated class for the ChatPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
//@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {



  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {

    }

    sendMessage() {

    }

    ionViewDidLoad() {

    }

    ionViewWillLeave(){

    }
  }
