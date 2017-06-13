import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo04CardPage } from './demo04-card';

@NgModule({
  declarations: [
    Demo04CardPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo04CardPage),
  ],
  exports: [
    Demo04CardPage
  ]
})
export class Demo04CardPageModule {}
