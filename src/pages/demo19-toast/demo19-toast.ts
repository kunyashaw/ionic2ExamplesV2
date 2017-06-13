import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
// ionic2 Toast组件是一个设计精巧的通知弹窗。
//这种弹窗不会有背景遮罩，不会阻塞用户操作，通常会在若干秒后自动消失。

/**
 * Generated class for the Demo19ToastPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo19-toast',
  templateUrl: 'demo19-toast.html',
})
export class Demo19ToastPage {

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo19ToastPage');
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'it is a toast',
      duration: 3000,
      position: 'middle',//top middle bottom(default)
      showCloseButton: true,
      closeButtonText: 'close'
    });
    toast.present();
  }
}
