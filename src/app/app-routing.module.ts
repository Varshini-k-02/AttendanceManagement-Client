import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableviewComponent } from './components/tableview/tableview.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'home',component:LoginComponent},
  {path:'view',component:TableviewComponent},
  {path:'add',component:AddDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
