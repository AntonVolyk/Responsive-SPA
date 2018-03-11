import {MenuItem} from '../fw/services/MenuService';

export const initialMenuItems: Array<MenuItem> = [
  {
    text: 'Dashboard',
    icon: 'fa-tachometer-alt',
    route: 'dashboard',
    submenu: null
  },
  {
    text: 'Countries',
    icon: 'fa-flag',
    route: 'countries',
    submenu: null
  },
  {
    text: 'Settings',
    icon: 'fa-wrench',
    route: 'settings',
    submenu: null
  }

];
