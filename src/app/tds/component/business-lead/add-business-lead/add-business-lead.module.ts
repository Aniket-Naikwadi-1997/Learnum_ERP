import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBusinessLeadRoutingModule } from './add-business-lead-routing.module';
import { AddBusinessLeadComponent } from './add-business-lead.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddBusinessLeadComponent],
  imports: [
    CommonModule,
    AddBusinessLeadRoutingModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot(),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddBusinessLeadModule { }
