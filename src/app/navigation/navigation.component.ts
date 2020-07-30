import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {ActivatedRoute, Router} from "@angular/router";
import {HostLocationService} from "../host-location.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private hostLocationService: HostLocationService,
              private router: Router,
              private route: ActivatedRoute) {
    console.log('got initialized');

  }

  ngOnInit() {
    console.log(this.route);
    console.log(this.router);
    this.hostLocationService.handleNavigation();
  }

}
