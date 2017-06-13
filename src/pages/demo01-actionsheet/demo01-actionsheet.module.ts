import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo01ActionsheetPage } from './demo01-actionsheet';

@NgModule({
  declarations: [
    Demo01ActionsheetPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo01ActionsheetPage),
  ],
  exports: [
    Demo01ActionsheetPage
  ]
})
export class Demo01ActionsheetPageModule {}
