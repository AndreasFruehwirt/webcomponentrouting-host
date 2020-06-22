import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageOneComponent} from "./navigation/page-one/page-one.component";
import {PageTwoComponent} from "./navigation/page-two/page-two.component";
import {PageThreeComponent} from "./navigation/page-three/page-three.component";
import {ElementRoutingModule} from "./element-routing/element-routing.module";


const routes: Routes = [
  { path: 'page-one', component: PageOneComponent, outlet: 'dashboard'},
  { path: 'page-two', component: PageTwoComponent, outlet: 'dashboard'},
  { path: 'page-three', component: PageThreeComponent, outlet: 'dashboard'},
  { path: '**', redirectTo: 'page-one', pathMatch: 'full'}
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/

@NgModule({
  imports: [
    ElementRoutingModule.withRoutes(routes),
  ],
  exports: [ElementRoutingModule],
})
export class AppRoutingModule { }
