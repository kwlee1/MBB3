import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', component:UserComponent},
  {path: "dashboard", pathMatch: 'full', component:DashboardComponent},
  {path: "create", pathMatch:'full', component:CreateComponent},
  {path: "poll/:id", component:ShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
