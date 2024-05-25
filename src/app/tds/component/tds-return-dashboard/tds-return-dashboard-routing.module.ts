import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TDSRETURNDASHBOARDComponent } from './tds-return-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: TDSRETURNDASHBOARDComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TDSRETURNDASHBOARDRoutingModule {}
