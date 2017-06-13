import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo08GridPage } from './demo08-grid';

@NgModule({
  declarations: [
    Demo08GridPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo08GridPage),
  ],
  exports: [
    Demo08GridPage
  ]
})
export class Demo08GridPageModule {}
