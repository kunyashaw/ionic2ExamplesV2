import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo22RefresherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo22-refresher',
  templateUrl: 'demo22-refresher.html',
})
export class Demo22RefresherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  items = [10, 20, 30];
  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo22RefresherPage');
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.items.push(Math.floor(Math.random() * 100));
      refresher.complete();
    }, 2000);
  }

}
