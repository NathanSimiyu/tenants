import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface Tenant {
  name: string;
  email: string;
}


@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',

})
export class TenantsComponent implements OnInit {

  tenants: Tenant[] = [];

  constructor(private router:Router) { }
  showAddTenantForm(){
    this.router.navigate(['add']);
  }

  ngOnInit() {
  }

  addTenant() {
    console.log('Add tenant');
  }

  editTenant(tenant: Tenant) {
    console.log('Edit tenant: ', tenant);
  }

  deleteTenant(tenant: Tenant) {
    console.log('Delete tenant: ', tenant);
  }

}
