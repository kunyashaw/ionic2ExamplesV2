import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestModal } from './testModal'
/**
 * Generated class for the Demo14ModalsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo14-modals',
  templateUrl: 'demo14-modals.html',
})
export class Demo14ModalsPage {
  // ionic2的模态框是一个从屏幕底部滑入当前视图的临时UI层，
  //通常可以用来做登陆注册、提示信息和选项窗体。
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo14ModalsPage');
  }
  presentModal() {
    let modal = this.modalCtrl.create(TestModal);
    modal.present();
  }

}
