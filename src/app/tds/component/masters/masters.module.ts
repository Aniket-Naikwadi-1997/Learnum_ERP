import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MastersRoutingModule } from './masters-routing.module';
import { BranchesComponent } from './branches/branches.component';
import { IpAddressComponent } from './ip-address/ip-address.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { CoursesComponent } from './courses/courses.component';
import { SubjectsComponent } from './subjects/subjects.component';
//import { BatchesComponent } from './batches/batches.component';
import { BranchesModule } from './branches/branches.module'


@NgModule({
  declarations: [
    BranchesComponent,
    IpAddressComponent,
    ClassroomsComponent,
    CoursesComponent,
    SubjectsComponent,
    //BatchesComponent,
    
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    SharedModule,
    BranchesModule
  ]
})
export class MastersModule { }
