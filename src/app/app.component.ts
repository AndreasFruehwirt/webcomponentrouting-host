import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {Location} from "@angular/common";
import {HostLocationService} from "./host-location.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dashboard-app';
  constructor(private router: Router,
              private location: Location,
              private hostLocationService: HostLocationService,
              private route: ActivatedRoute) {
    this.route.params.subscribe((val) => {
      console.log('shdkögjhladjkaghlasdkjghl');
      console.log(val);
      this.router.navigateByUrl('/banknav-one(page:page-one)');
      if (val instanceof NavigationStart) {

      }
    })

  }

  ngOnInit() {
    this.router.initialNavigation();
    this.hostLocationService.handleNavigation();


    //init router with starting path
    /*this.router.navigateByUrl(this.location.path(true));

    //on every route change tell router to navigate to defined route
    this.location.subscribe(data => {
      this.router.navigateByUrl(data.url);
    });*/
  }
}
