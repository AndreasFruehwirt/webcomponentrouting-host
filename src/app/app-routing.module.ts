import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageOneComponent} from "./navigation/page-one/page-one.component";
import {PageTwoComponent} from "./navigation/page-two/page-two.component";
import {PageThreeComponent} from "./navigation/page-three/page-three.component";


const routes: Routes = [
  { path: 'page-one', component: PageOneComponent, outlet: 'dashboard'},
  { path: 'page-two', component: PageTwoComponent, outlet: 'dashboard'},
  { path: 'page-three', component: PageThreeComponent, outlet: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
