import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo21InfinitePage } from './demo21-infinite';

@NgModule({
  declarations: [
    Demo21InfinitePage,
  ],
  imports: [
    IonicPageModule.forChild(Demo21InfinitePage),
  ],
  exports: [
    Demo21InfinitePage
  ]
})
export class Demo21InfinitePageModule {}
