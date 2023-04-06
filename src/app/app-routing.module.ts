import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'math', loadChildren: () => import('./math/math.module').then(m => m.MathModule)},
  { path: 'physics', loadChildren: () => import('./physics/physics.module').then(m => m.PhysicsModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
