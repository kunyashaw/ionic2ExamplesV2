import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo14ModalsPage } from './demo14-modals';

@NgModule({
  declarations: [
    Demo14ModalsPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo14ModalsPage),
  ],
  exports: [
    Demo14ModalsPage
  ]
})
export class Demo14ModalsPageModule {}
