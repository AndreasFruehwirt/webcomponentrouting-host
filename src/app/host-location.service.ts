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
        console.log('do some magic');

      }
    });
  }
}
