import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo12LoadingPage } from './demo12-loading';

@NgModule({
  declarations: [
    Demo12LoadingPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo12LoadingPage),
  ],
  exports: [
    Demo12LoadingPage
  ]
})
export class Demo12LoadingPageModule {}
