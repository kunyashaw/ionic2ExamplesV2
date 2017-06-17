import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// @IonicPage()
@Component({
    selector: 'testLifeCycle',
    templateUrl: 'testlifecycle.component.html'
})

export class TestLifeCycleComponent implements OnInit {
    constructor(public http: Http, public navParams: NavParams, public navCtrl: NavController) { }
    result: any;
    ngOnInit() {
        console.log(this.navParams.data);
    }

    back() {
        this.navCtrl.pop();
    }
    backToRoot() {
        this.navCtrl.popToRoot();
    }
    ionViewCanEnter(): boolean {
        console.log('test can enter');
        return Math.random() > 0.5;

    }

    ionViewDidLoad() {
        console.log('test in load');
    }

    ionViewWillEnter() {
        console.log('test will enter');
    }

    ionViewDidEnter() {
        console.log('test did enter');

    }
    ionViewCanLeave() {
        console.log('test can leave');

    }
    ionViewWillLeave() {
        console.log('test will leave');
    }

    ionViewDidLeave() {
        console.log('test Did Leave');
    }

}