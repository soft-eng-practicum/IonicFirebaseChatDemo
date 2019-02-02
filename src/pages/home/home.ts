import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';

import {ChatPage} from '../chat/chat';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

//declare the username variable

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  showAlert(title: string, message: string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
  loginUser(){
    //Populate with method to "log the user in". Does not actually handle any sort of authentication.
    //Consider it a dummy login.
  }
}
