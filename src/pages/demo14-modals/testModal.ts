import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular'
// ViewController:Access various features and information about the current view.
// 访问当前视图的功能和信息
@Component({
    templateUrl: './testModal.html',
})
export class TestModal implements OnInit {
    constructor(public viewCtrl: ViewController) { }

    ngOnInit() { }

    dismiss() {
        this.viewCtrl.dismiss();
        // Dismiss the current viewController
    }
}