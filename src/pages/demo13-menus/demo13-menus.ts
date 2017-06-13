import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo13MenusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo13-menus',
  templateUrl: 'demo13-menus.html',
})
export class Demo13MenusPage {

  constructor(public navCtrl: NavController, public menu: MenuController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo13MenusPage');
  }

  // //open() 打开菜单。返回一个Promise,当菜单被完全打开时，你可以执行一个事件。

  // close(menuId) 如果menuId为空，那么将关闭所有打开的菜单，如果menuId被设置，那么将关闭指定的菜单。返回一个Promise

  // toggle(menuId)菜单开关。如果菜单当前关闭，那么将打开，如果菜单当前打开，将被关闭。
  // 返回一个Promise。

  // enable(menuId) 当你有多个menu的时候，用于启用或禁用menu。当你启用一个menu那么同方向的其他menu将被禁用。
  // 返回一个menu实例。

  // swipeEnable(shouldEnable,menuId)

  // isOpen() 返回一个布尔值来表示menu是否处于打开状态

  // isEnabled 返回一个布尔值来表示menu是否被启用

  // get(menuId) 返回一个menu实例，如果menuId的menu没有找到，那么将会返回null

  // getMenus() 返回menu实例数组 

  openLeft() {
    this.menu.open('myMenuLeft');
    console.log(this.menu.getMenus());
  }

  openRight() {
    this.menu.open('myMenuRight');
  }
}
