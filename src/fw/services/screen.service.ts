import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ScreenService {
  private resizeSource = new Subject<null>();
  resize$ = this.resizeSource.asObservable();

  largeBreakpoint = 800;
  screenWidth = 1000;
  screenHeight = 800;

  constructor() {
    try {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
      window.addEventListener('resize', (event) => this.onResize(event));
    } catch (e) {

    }
  }

  isLarge(): boolean {
    return this.screenWidth >= this.largeBreakpoint;
  }

  onResize($event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.resizeSource.next();
  }

}
