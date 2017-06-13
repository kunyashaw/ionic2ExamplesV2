import { Component } from '@angular/core';
import { LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo12LoadingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo12-loading',
  templateUrl: 'demo12-loading.html',
})
export class Demo12LoadingPage {

  constructor(public navCtrl: NavController, public loadingController: LoadingController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo12LoadingPage');
    this.showLoading();
  }

  showLoading() {
    let loader = this.loadingController.create({
      content: 'loading...',
      duration: 3000
    });
    loader.present();
  }
}
