import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo16SegmentPage } from './demo16-segment';

@NgModule({
  declarations: [
    Demo16SegmentPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo16SegmentPage),
  ],
  exports: [
    Demo16SegmentPage
  ]
})
export class Demo16SegmentPageModule {}
