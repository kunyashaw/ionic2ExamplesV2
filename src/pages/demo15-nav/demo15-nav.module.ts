import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo15NavPage } from './demo15-nav';

@NgModule({
  declarations: [
    Demo15NavPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo15NavPage),
  ],
  exports: [
    Demo15NavPage
  ]
})
export class Demo15NavPageModule {}
