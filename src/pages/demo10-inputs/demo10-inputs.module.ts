import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo10InputsPage } from './demo10-inputs';

@NgModule({
  declarations: [
    Demo10InputsPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo10InputsPage),
  ],
  exports: [
    Demo10InputsPage
  ]
})
export class Demo10InputsPageModule {}
