import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo07GesturePage } from './demo07-gesture';

@NgModule({
  declarations: [
    Demo07GesturePage,
  ],
  imports: [
    IonicPageModule.forChild(Demo07GesturePage),
  ],
  exports: [
    Demo07GesturePage
  ]
})
export class Demo07GesturePageModule {}
