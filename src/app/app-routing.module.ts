import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableviewComponent } from './components/tableview/tableview.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'view',component:TableviewComponent,canActivate: [authGuard]},
  {path:'add',component:AddDataComponent,canActivate: [authGuard]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
