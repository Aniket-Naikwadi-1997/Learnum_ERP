import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounsellorDashboardRoutingModule } from './counsellor-dashboard-routing.module';
import { CollegesComponent } from './colleges/colleges.component';
import { ScheduleMeetingWithCollegeComponent } from './schedule-meeting-with-college/schedule-meeting-with-college.component';
import { ScheduleSeminarWithCollegeComponent } from './schedule-seminar-with-college/schedule-seminar-with-college.component';
import { StudentLeadsComponent } from './student-leads/student-leads.component';
import { WebsiteLeadsComponent } from './website-leads/website-leads.component';
import { CallWithStudentLeadComponent } from './call-with-student-lead/call-with-student-lead.component';
import { CounsellingWithStudentComponent } from './counselling-with-student/counselling-with-student.component';


@NgModule({
  declarations: [
    CollegesComponent,
    ScheduleMeetingWithCollegeComponent,
    ScheduleSeminarWithCollegeComponent,
    StudentLeadsComponent,
    WebsiteLeadsComponent,
    CallWithStudentLeadComponent,
    CounsellingWithStudentComponent
  ],
  imports: [
    CommonModule,
    CounsellorDashboardRoutingModule
  ]
})
export class CounsellorDashboardModule { }
