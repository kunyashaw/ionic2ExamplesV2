import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo16SegmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo16-segment',
  templateUrl: 'demo16-segment.html',
})
export class Demo16SegmentPage {
  pet: any;
  // Segment是一组按钮，允许用户和一组按钮进行交互，类似于标签页的功能。
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo16SegmentPage');
  }

}
