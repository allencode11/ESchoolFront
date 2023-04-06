import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from "./pages/login/login.component";
import { HomeRoutingModule } from "./home-routing.module";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
