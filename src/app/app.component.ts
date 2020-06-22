import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dashboard-app';
  constructor(private router: Router, private location: Location) {

  }

  ngOnInit() {
    this.router.initialNavigation();
    //init router with starting path
    this.router.navigateByUrl(this.location.path(true));

    //on every route change tell router to navigate to defined route
    this.location.subscribe(data => {
      this.router.navigateByUrl(data.url);
    });
  }
}
