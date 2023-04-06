import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartPageComponent} from "../math/pages/start-page/start-page.component";
import {ItemsComponent} from "../math/pages/items/items.component";

const routes: Routes = [
  { path: 'home', component: StartPageComponent },
  { path: 'items', component: ItemsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysicsRoutingModule { }
