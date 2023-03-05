import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isDesktop$ = this.breakpointObserver
    .observe(`(min-width: 1200px)`)
    .pipe(map((state) => state.matches));

  isMobile$ = this.breakpointObserver
    .observe(`(max-width: 599px)`)
    .pipe(map((state) => state.matches));
}
