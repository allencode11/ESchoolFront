import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathComponent } from './math.component';
import {StartPageComponent} from "./pages/start-page/start-page.component";
import {ItemsComponent} from "./pages/items/items.component";
import {MathRoutingModule} from "./math-routing.module";




@NgModule({
  declarations: [
    MathComponent,
    StartPageComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    MathRoutingModule
  ]
})
export class MathModule { }
