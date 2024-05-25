import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpAddressComponent } from './ip-address.component';

const routes: Routes = [
  {
    path: '',
    component: IpAddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpAddressRoutingModule { }
