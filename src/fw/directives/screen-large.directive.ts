import {Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import {ScreenService} from '../services/screen.service';
import {Subscription} from 'rxjs/Subscription';

@Directive({
  selector: '[screenLarge]'
})
export class ScreenLarge implements OnDestroy {
  @Input()
  set screenLarge(condition: boolean) {
    condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;

    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  private subscription: Subscription;
  private hasView = false;

  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<object>,
              private screenService: ScreenService) {
    this.subscription = this.screenService.resize$.subscribe(() => this.onResize());
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

  onResize() {
    this.screenLarge = false;
  }

}



