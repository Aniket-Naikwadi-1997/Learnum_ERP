import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPracticalExamRoutingModule } from './my-practical-exam-routing.module';
import { PracticalProblemAnswerSheetComponent } from './practical-problem-answer-sheet/practical-problem-answer-sheet.component';
import { MyPracticalExamReportsComponent } from './my-practical-exam-reports/my-practical-exam-reports.component';


@NgModule({
  declarations: [
    PracticalProblemAnswerSheetComponent,
    MyPracticalExamReportsComponent
  ],
  imports: [
    CommonModule,
    MyPracticalExamRoutingModule
  ]
})
export class MyPracticalExamModule { }
