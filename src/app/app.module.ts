import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Demo01ActionsheetPage } from '../pages/demo01-actionsheet/demo01-actionsheet';
import { Demo02AlertPage } from '../pages/demo02-alert/demo02-alert';
import { Demo03ButtonPage } from '../pages/demo03-button/demo03-button';
import { Demo04CardPage } from '../pages/demo04-card/demo04-card';
import { Demo05FormPage } from '../pages/demo05-form/demo05-form';
import { Demo06FabPage } from '../pages/demo06-fab/demo06-fab';
import { Demo07GesturePage } from '../pages/demo07-gesture/demo07-gesture';
import { Demo08GridPage } from '../pages/demo08-grid/demo08-grid';
import { Demo09IconPage } from '../pages/demo09-icon/demo09-icon';
import { Demo10InputsPage } from '../pages/demo10-inputs/demo10-inputs'
import { Demo11ListPage } from '../pages/demo11-list/demo11-list'
import { Demo12LoadingPage } from '../pages/demo12-loading/demo12-loading'
import { Demo13MenusPage } from '../pages/demo13-menus/demo13-menus'
import { Demo14ModalsPage } from '../pages/demo14-modals/demo14-modals'
import { TestModal } from '../pages/demo14-modals/testModal'
import { Demo16SegmentPage } from '../pages/demo16-segment/demo16-segment'
import { Demo17SlidesPage } from '../pages/demo17-slides/demo17-slides'
import { Demo18TabsPage } from '../pages/demo18-tabs/demo18-tabs'
import { Demo19ToastPage } from '../pages/demo19-toast/demo19-toast'
import { Demo20ToolbarPage } from '../pages/demo20-toolbar/demo20-toolbar'
@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Demo01ActionsheetPage,
    Demo02AlertPage,
    Demo03ButtonPage,
    Demo04CardPage,
    Demo05FormPage,
    Demo06FabPage,
    Demo07GesturePage,
    Demo08GridPage,
    Demo09IconPage,
    Demo10InputsPage,
    Demo11ListPage,
    Demo12LoadingPage,
    Demo13MenusPage,
    Demo14ModalsPage,
    TestModal,
    Demo16SegmentPage,
    Demo17SlidesPage,
    Demo18TabsPage,
    Demo19ToastPage,
    Demo20ToolbarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Demo01ActionsheetPage,
    Demo02AlertPage,
    Demo03ButtonPage,
    Demo04CardPage,
    Demo05FormPage,
    Demo06FabPage,
    Demo07GesturePage,
    Demo08GridPage,
    Demo09IconPage,
    Demo10InputsPage,
    Demo11ListPage,
    Demo12LoadingPage,
    Demo13MenusPage,
    Demo14ModalsPage,
    TestModal,
    Demo16SegmentPage,
    Demo17SlidesPage,
    Demo18TabsPage,
    Demo19ToastPage,
    Demo20ToolbarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
