import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo22RefresherPage } from './demo22-refresher';

@NgModule({
  declarations: [
    Demo22RefresherPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo22RefresherPage),
  ],
  exports: [
    Demo22RefresherPage
  ]
})
export class Demo22RefresherPageModule {}
