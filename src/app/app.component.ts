import {Component} from '@angular/core';
import {FrameworkConfigService} from '../fw/services/framework-config.service';
import {MenuService} from '../fw/services/MenuService';
import {initialMenuItems} from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private framworkConfigService: FrameworkConfigService,
              private menuService: MenuService) {
    const config = {
      socialIcons: [
        {imageFile: 'assets/facebook.jpg', alt: 'Facebook', link: 'http://www.facebook.com'},
        {imageFile: 'assets/twitter.jpg', alt: 'Twitter', link: 'http://www.twitter.com'},
        {imageFile: 'assets/google.jpg', alt: 'Google', link: 'http://www.google.com'}
      ],
      showLanguageSelector: true,
      showUserControls: true,
      shoowStatusBar: true,
      shoowStatusBarBreakpoint: 800
    };

    framworkConfigService.config(config);
    this.menuService.items = initialMenuItems;
  }
}
