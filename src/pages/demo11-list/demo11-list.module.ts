import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo11ListPage } from './demo11-list';

@NgModule({
  declarations: [
    Demo11ListPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo11ListPage),
  ],
  exports: [
    Demo11ListPage
  ]
})
export class Demo11ListPageModule {}
