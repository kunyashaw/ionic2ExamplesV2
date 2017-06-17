import { Component } from '@angular/core';
import { ToastController, AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestLifeCycleComponent } from './test-lifecycle'

/**
 * Generated class for the Demo23LifecyclePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo23-lifecycle',
  templateUrl: 'demo23-lifecycle.html',
})
export class Demo23LifecyclePage {
  testPage: any;

  constructor(public toastCtr: ToastController, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.testPage = TestLifeCycleComponent;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo23LifecyclePage');
  }

  goToTest(params) {
    var promise = this.navCtrl
      .push(TestLifeCycleComponent, params);
    promise
      .then((data) => {
        console.log('jump promoise: resolve result', data);
        if (!data) {
          this.alertCtrl.create({ message: 'AccessDenied' }).present();
        }
        else {
          //  duration: 3000,position: 'middle',//top middle bottom(default)
          this.toastCtr.create({ message: 'Success', duration: 500, position: 'middle' }).present();
        }
      })

    /* var promise = this.navCtrl
       .push(TestLifeCycleComponent, { fail: result });
     if (result) {
       promise = Promise.reject(new Error("BOOM!"))
     }
     else {
       promise = Promise.resolve(123);
     }
     promise
       .then(function (data) {
         console.log('jump promoise: resolve result', data);
       })
       .catch(function (data) {
         console.log('jump promoise: reject result', data);
       })
       */

  }



}
