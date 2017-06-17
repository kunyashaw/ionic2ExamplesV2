import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
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
import { Demo16SegmentPage } from '../pages/demo16-segment/demo16-segment'
import { Demo17SlidesPage } from '../pages/demo17-slides/demo17-slides'
import { Demo18TabsPage } from '../pages/demo18-tabs/demo18-tabs'
import { Demo19ToastPage } from '../pages/demo19-toast/demo19-toast'
import { Demo20ToolbarPage } from '../pages/demo20-toolbar/demo20-toolbar'
import { Demo21InfinitePage } from '../pages/demo21-infinite/demo21-infinite'
import { Demo22RefresherPage } from '../pages/demo22-refresher/demo22-refresher'
import { Demo23LifecyclePage } from '../pages/demo23-lifecycle/demo23-lifecycle'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello', component: HelloIonicPage },
      { title: 'myList', component: ListPage },
      { title: 'actionSheet', component: Demo01ActionsheetPage },
      { title: 'Demo02AlertPage', component: Demo02AlertPage },
      { title: 'Demo03ButtonPage', component: Demo03ButtonPage },
      { title: 'Demo04CardPage', component: Demo04CardPage },
      { title: 'Demo05FormPage', component: Demo05FormPage },
      { title: 'Demo06FabPage', component: Demo06FabPage },
      { title: 'Demo07GesturePage', component: Demo07GesturePage },
      { title: 'Demo08GridPage', component: Demo08GridPage },
      { title: 'Demo09IconPage', component: Demo09IconPage },
      { title: 'Demo10InputsPage', component: Demo10InputsPage },
      { title: 'Demo11ListPage', component: Demo11ListPage },
      { title: 'Demo12LoadingPage', component: Demo12LoadingPage },
      { title: 'Demo13MenusPage', component: Demo13MenusPage },
      { title: 'Demo14ModalsPage', component: Demo14ModalsPage },
      { title: 'Demo16SegmentPage', component: Demo16SegmentPage },
      { title: 'Demo17SlidesPage', component: Demo17SlidesPage },
      { title: 'Demo18TabsPage', component: Demo18TabsPage },
      { title: 'Demo19ToastPage', component: Demo19ToastPage },
      { title: 'Demo20ToolbarPage', component: Demo20ToolbarPage },
      { title: 'Demo21InfinitePage', component: Demo21InfinitePage },
      { title: 'Demo22RefresherPage', component: Demo22RefresherPage },
      { title: 'Demo23LifeCycle', component: Demo23LifecyclePage }
    ];
    this.menu.open('myMenuLeft');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
