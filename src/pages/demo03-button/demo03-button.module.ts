import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo03ButtonPage } from './demo03-button';

@NgModule({
  declarations: [
    Demo03ButtonPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo03ButtonPage),
  ],
  exports: [
    Demo03ButtonPage
  ]
})
export class Demo03ButtonPageModule {}
