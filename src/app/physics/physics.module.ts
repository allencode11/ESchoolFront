import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicsComponent } from './physics.component';
import { ItemsComponent } from "./pages/items/items.component";
import { StartPageComponent } from "./pages/start-page/start-page.component";
import {PhysicsRoutingModule} from "./physics-routing.module";



@NgModule({
  declarations: [
    PhysicsComponent,
    StartPageComponent,
    ItemsComponent,
  ],
  imports: [
    CommonModule,
    PhysicsRoutingModule
  ]
})
export class PhysicsModule { }
