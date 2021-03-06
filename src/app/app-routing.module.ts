import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageOneComponent} from "./navigation/page-one/page-one.component";
import {PageTwoComponent} from "./navigation/page-two/page-two.component";
import {PageThreeComponent} from "./navigation/page-three/page-three.component";
import {ElementRoutingModule} from "./element-routing/element-routing.module";
import {EmptyComponentComponent} from "./empty-component/empty-component.component";


const routes: Routes = [
  { path: 'page-one', component: PageOneComponent, outlet: 'page'},
  { path: 'page-two', component: PageTwoComponent, outlet: 'page'},
  { path: 'page-three', component: PageThreeComponent, outlet: 'page'},
  { path: '', redirectTo: '/banknav-one(page:page-one)', pathMatch: 'full' },
  { path: '**', component: EmptyComponentComponent }
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/

/*@NgModule({
  imports: [
    ElementRoutingModule.withRoutes(routes),
  ],
  exports: [ElementRoutingModule],
})*/

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // onSameUrlNavigation: 'ignore',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {

  }

}
