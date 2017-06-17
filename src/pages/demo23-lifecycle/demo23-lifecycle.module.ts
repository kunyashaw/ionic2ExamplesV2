import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo23LifecyclePage } from './demo23-lifecycle';
import { TestLifeCycleComponent } from './test-lifecycle';

@NgModule({
  declarations: [
    Demo23LifecyclePage,
    TestLifeCycleComponent
  ],
  imports: [
    IonicPageModule.forChild(Demo23LifecyclePage),
    IonicPageModule.forChild(TestLifeCycleComponent),
  ],
  exports: [
    Demo23LifecyclePage,
    TestLifeCycleComponent
  ]
})
export class Demo23LifecyclePageModule { }
