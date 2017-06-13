import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo05FormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo05-form',
  templateUrl: 'demo05-form.html',
})
export class Demo05FormPage {
  timeStarts: any;
  color: any
  list = [100, 200, 300];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo05FormPage');
  }

  getItem(event: any) {
    let val = event.target.value;
    this.list.push(val);

  }

}
