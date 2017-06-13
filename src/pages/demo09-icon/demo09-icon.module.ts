import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo09IconPage } from './demo09-icon';

@NgModule({
  declarations: [
    Demo09IconPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo09IconPage),
  ],
  exports: [
    Demo09IconPage
  ]
})
export class Demo09IconPageModule {}
