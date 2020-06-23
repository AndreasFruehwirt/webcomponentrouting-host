import { Injectable } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HostLocationService {

  constructor(private router:Router) { }

  public handleNavigation() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        console.log(val);
        console.log('--------- from webcomponent --------------');
        const fullRouteUrl = val.url;

        if (val.navigationTrigger === 'imperative' || val.navigationTrigger === 'popstate') {

          // Get URL from current Route
          const fullRouteUrl = val.url;
          console.log('router includes');
          console.log(fullRouteUrl.includes('('));
          if (fullRouteUrl.includes('(')) {
            console.log('doing some magic in because it includes outlet');
          } else {
            this.router.navigateByUrl('/banknav-one(page:page-one)');
            console.log('should do the other stuff');
          }



        }
      }
    });
  }
}
