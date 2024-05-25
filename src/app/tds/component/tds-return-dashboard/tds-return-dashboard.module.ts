import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TDSRETURNDASHBOARDRoutingModule } from './tds-return-dashboard-routing.module';
import { TDSRETURNDASHBOARDComponent } from './tds-return-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [TDSRETURNDASHBOARDComponent],
  imports: [CommonModule, TDSRETURNDASHBOARDRoutingModule, FormsModule,SharedModule ],
  providers: [],
  exports: [],
})
export class TDSRETURNDASHBOARDModule {}