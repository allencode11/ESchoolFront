import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from "./pages/start-page/start-page.component";
import { ItemsComponent } from "./pages/items/items.component";

const routes: Routes = [
  { path: 'home', component: StartPageComponent },
  { path: 'items', component: ItemsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathRoutingModule { }
