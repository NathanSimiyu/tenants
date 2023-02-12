import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TenantsComponent } from './tenants/tenants.component';

const routes: Routes = [
  {path: '',component:NavbarComponent},
  {path:'tenants', component: TenantsComponent},
  {path: 'admin', component: AdminComponent},
  {path:'add', component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
