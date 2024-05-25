import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeRoutingModule } from './add-employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEmployeeComponent } from './add-employee.component';
import { AddEmployeeService } from './add-employee.service';


@NgModule({
  declarations: [
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    AddEmployeeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot(),

  ],
  providers : [
    AddEmployeeService
  ]
})
export class AddEmployeeModule { }
