import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo13MenusPage } from './demo13-menus';

@NgModule({
  declarations: [
    Demo13MenusPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo13MenusPage),
  ],
  exports: [
    Demo13MenusPage
  ]
})
export class Demo13MenusPageModule {}
