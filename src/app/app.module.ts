import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {createCustomElement} from "@angular/elements";
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PageOneComponent } from './navigation/page-one/page-one.component';
import { PageTwoComponent } from './navigation/page-two/page-two.component';
import { PageThreeComponent } from './navigation/page-three/page-three.component';
import {Router} from "@angular/router";
import { Location } from "@angular/common";
import { EmptyComponentComponent } from './empty-component/empty-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    EmptyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: []
})
export class AppModule {
  constructor(private router: Router, private location: Location, private injector: Injector) {

  }

  ngDoBootstrap() {
    const elm = createCustomElement(AppComponent, { injector: this.injector });
    try {
      customElements.define('ce-dashboard', elm);
    } catch (e) {

    }
  }
}
