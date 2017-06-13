import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo20ToolbarPage } from './demo20-toolbar';

@NgModule({
  declarations: [
    Demo20ToolbarPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo20ToolbarPage),
  ],
  exports: [
    Demo20ToolbarPage
  ]
})
export class Demo20ToolbarPageModule {}
