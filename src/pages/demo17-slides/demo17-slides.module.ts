import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo17SlidesPage } from './demo17-slides';

@NgModule({
  declarations: [
    Demo17SlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo17SlidesPage),
  ],
  exports: [
    Demo17SlidesPage
  ]
})
export class Demo17SlidesPageModule {}
