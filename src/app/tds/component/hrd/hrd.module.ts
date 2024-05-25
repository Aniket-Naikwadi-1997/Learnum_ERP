import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrdRoutingModule } from './hrd-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { TrainerComponent } from './trainer/trainer.component';
import { BranchManagerComponent } from './branch-manager/branch-manager.component';
import { ContentWriterComponent } from './content-writer/content-writer.component';
import { CounsellorComponent } from './counsellor/counsellor.component';
import { AccountantComponent } from './accountant/accountant.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DailyWorkComponent } from './daily-work/daily-work.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    TrainerComponent,
    BranchManagerComponent,
    ContentWriterComponent,
    CounsellorComponent,
    AccountantComponent,
    AttendanceComponent,
    DailyWorkComponent,
    BirthdaysComponent
  ],
  imports: [
    CommonModule,
    HrdRoutingModule
  ]
})
export class HrdModule { }
