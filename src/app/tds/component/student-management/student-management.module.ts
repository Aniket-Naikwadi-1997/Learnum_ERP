import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentManagementRoutingModule } from './student-management-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { OfflineFeesPaymentComponent } from './offline-fees-payment/offline-fees-payment.component';
import { SendFeesReminderReportComponent } from './send-fees-reminder-report/send-fees-reminder-report.component';
import { StudentAdmissionStatusComponent } from './student-admission-status/student-admission-status.component';
import { OfflineFeesStatusComponent } from './offline-fees-status/offline-fees-status.component';


@NgModule({
  declarations: [
    AddStudentComponent,
    StudentAdmissionComponent,
    OfflineFeesPaymentComponent,
    SendFeesReminderReportComponent,
    StudentAdmissionStatusComponent,
    OfflineFeesStatusComponent
  ],
  imports: [
    CommonModule,
    StudentManagementRoutingModule
  ]
})
export class StudentManagementModule { }
