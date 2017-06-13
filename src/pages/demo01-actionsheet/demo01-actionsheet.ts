import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the Demo01ActionsheetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo01-actionsheet',
  templateUrl: 'demo01-actionsheet.html',
})
export class Demo01ActionsheetPage {

  constructor(public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo01ActionsheetPage');

  }

  showActionSheet() {
    console.log('btn is clicked');
    let actionSheet = this.actionSheetCtrl.create({
      title: '操作文章',
      buttons: [
        {
          text: '删除', role: 'destructive', handler: function () {
            console.log('删除按钮被点击了');
          }
        },
        {
          text: '分享到朋友圈', handler: function () {
            console.log('分享到朋友圈成功');
          }
        },
        {
          text: '取消', role: 'cancel', handler: function () {
            console.log('取消成功');
          }
        }
      ]
    })
    actionSheet.present();
  }

}
