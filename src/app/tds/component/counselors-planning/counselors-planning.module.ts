import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounselorsPlanningRoutingModule } from './counselors-planning-routing.module';
import { TrainersPlanningComponent } from './trainers-planning/trainers-planning.component';
import { BatchesPlanningComponent } from './batches-planning/batches-planning.component';


@NgModule({
  declarations: [
    TrainersPlanningComponent,
    BatchesPlanningComponent
  ],
  imports: [
    CommonModule,
    CounselorsPlanningRoutingModule
  ]
})
export class CounselorsPlanningModule { }
