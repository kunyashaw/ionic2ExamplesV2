import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo05FormPage } from './demo05-form';

@NgModule({
  declarations: [
    Demo05FormPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo05FormPage),
  ],
  exports: [
    Demo05FormPage
  ]
})
export class Demo05FormPageModule {}
