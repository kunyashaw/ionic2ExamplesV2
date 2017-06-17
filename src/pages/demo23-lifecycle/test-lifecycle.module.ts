import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestLifeCycleComponent } from './test-lifecycle';

@NgModule({
    declarations: [
        TestLifeCycleComponent
    ],
    imports: [
        IonicPageModule.forChild(TestLifeCycleComponent),
    ],
    exports: [
        TestLifeCycleComponent
    ]
})
export class TestLifecyclePageModule { }
