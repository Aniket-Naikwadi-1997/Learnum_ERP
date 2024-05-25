import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessLeadRoutingModule } from './business-lead-routing.module';
//import { AllBusinessLeadComponent } from './all-business-lead/all-business-lead.component';
import { AddBusinessLeadComponent } from './add-business-lead/add-business-lead.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BusinessLeadComponent } from './business-lead.component';

@NgModule({
  declarations: [
    //AllBusinessLeadComponent,
    AddBusinessLeadComponent,
    BusinessLeadComponent
  ],
  imports: [
    CommonModule,
    BusinessLeadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
  ],
  exports: [BusinessLeadComponent]
})
export class BusinessLeadModule { }
