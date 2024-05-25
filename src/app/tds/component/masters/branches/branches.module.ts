import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './branches.component';

@NgModule({
  declarations: [BranchesComponent],
  imports: [
    CommonModule,
    BranchesRoutingModule,
    SharedModule
  ],
  exports: [BranchesComponent]
})
export class BranchesModule { }
