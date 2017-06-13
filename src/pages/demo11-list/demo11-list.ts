import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo11ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo11-list',
  templateUrl: 'demo11-list.html',
})
export class Demo11ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  items = [10, 20, 30, 40]
  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo11ListPage');
  }
  itemSelected(item) {
    alert(item);
  }

}
