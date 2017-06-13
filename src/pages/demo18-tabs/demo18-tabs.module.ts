import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo18TabsPage } from './demo18-tabs';

@NgModule({
  declarations: [
    Demo18TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo18TabsPage),
  ],
  exports: [
    Demo18TabsPage
  ]
})
export class Demo18TabsPageModule {}
