import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo21InfinitePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo21-infinite',
  templateUrl: 'demo21-infinite.html',
})
export class Demo21InfinitePage {

  items = [];

  constructor() {
    for (var i = 0; i < 30; i++) {
      this.items.push(this.items.length);
    }
  }

  doInfinite(infinite) {
    console.log('Begin async operation', infinite);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.items.push(Math.floor(Math.random() * 100));
      infinite.complete();
    }, 2000);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo21InfinitePage');
  }

}
