import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo19ToastPage } from './demo19-toast';

@NgModule({
  declarations: [
    Demo19ToastPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo19ToastPage),
  ],
  exports: [
    Demo19ToastPage
  ]
})
export class Demo19ToastPageModule {}
