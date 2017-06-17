import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo07GesturePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo07-gesture',
  templateUrl: 'demo07-gesture.html',
})
export class Demo07GesturePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo07GesturePage');
  }
  tap: number = 0;
  tapEvent() {
    this.tap++;
  }

  swipeNum: number = 0;
  swipeEvent(event) {
    console.log(event);
    this.swipeNum++;
  }

}
