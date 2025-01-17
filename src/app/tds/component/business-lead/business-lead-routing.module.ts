import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessLeadComponent } from './business-lead.component';

const routes: Routes = [
  {
    path:'',
    component:BusinessLeadComponent,

    children:[
// {
//   path: '',
//         redirectTo: '',
//         pathMatch: 'full'
// },
{
  path: 'business-lead',
  loadChildren: () => import('./business-lead.module').then(m => m.BusinessLeadModule)
},

    ]},

    {
      path: 'add-business-lead',
      loadChildren: () => import('./add-business-lead/add-business-lead.module').then(m => m.AddBusinessLeadModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessLeadRoutingModule { }
