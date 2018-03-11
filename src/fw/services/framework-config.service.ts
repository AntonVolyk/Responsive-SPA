import {Injectable} from '@angular/core';

export interface ImageFile {
  imageFile: string;
  alt: string;
  link: string;
}

interface FrameworkConfig {
  socialIcons: ImageFile[];
  showLanguageSelector: boolean;
  showUserControls: boolean;
  shoowStatusBar: boolean
  shoowStatusBarBreakpoint: number;
}

@Injectable()
export class FrameworkConfigService implements FrameworkConfig{
  socialIcons: ImageFile[];
  showLanguageSelector: boolean;
  showUserControls: boolean;
  shoowStatusBar: boolean
  shoowStatusBarBreakpoint: number;

  constructor() {

  }

  config(config: FrameworkConfig) {
    this.socialIcons = config.socialIcons;
    this.showLanguageSelector = config.showLanguageSelector;
    this.showUserControls = config.showUserControls;
    this.shoowStatusBar = config.shoowStatusBar;
    this.shoowStatusBarBreakpoint = config.shoowStatusBarBreakpoint;
  }
}
