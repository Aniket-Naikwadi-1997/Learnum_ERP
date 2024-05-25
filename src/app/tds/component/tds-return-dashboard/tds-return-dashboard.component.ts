import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alertService';
import { TableColumn } from 'src/app/shared/data-grid/model/data-grid-column.model';
import { NewReturnModel } from './new-return.model';
import { TDSReturnDashboardService } from './tds-return-dashboard.service';
import { ResponseCode } from 'src/app/core/models/responseObject.model';
import { MessageService } from 'src/app/core/services/message.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'tds-return',
  templateUrl: './tds-return-dashboard.component.html',
  styleUrls: ['./tds-return-dashboard.component.scss'],
})
export class TDSRETURNDASHBOARDComponent {
 
  

  financialYearList = [
    { value: '1', label: 'FY 2023-24' },
    { value: '2', label: 'FY 2024-25' },
    { value: '3', label: 'FY 2025-26' }
  
  ]
  returnTypeList = [
    { value: '1', label: '24Q' },
    { value: '2', label: '25Q' },
    { value: '3', label: '26Q' }
  
  ]
  quarterTypeList = [
    { value: '1', label: 'Q1' },
    { value: '2', label: 'Q2' },
    { value: '3', label: 'Q3' }
  
  ]
  statementTypeList = [
    { value: '1', label: 'Regular' },
    { value: '2', label: 'Irregular' },
  
  ]
  tdsReturnList = [
  
]
declaredTableColumns: TableColumn[] = [
  {
    field: 'ReturnId',
    headerName: 'SR NO',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 100
  },
  {
    field: 'FinancialYear',
    headerName: 'Finanicial Year',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'QuarterName',
    headerName: 'Quarter',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 100

  },
  {
    field: 'ReturnType',
    headerName: 'Return Type',
    filter: 'agTextColumnFilter',
    
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'StatementType',
    headerName: 'Statement Type',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'ReturnStatus',
    headerName: 'Return Status',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'TracessesStatus',
    headerName: 'Tracesses Status',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'DateOfFilling',
    headerName: 'Date Of Filling',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'TokenNumber',
    headerName: 'Token Number',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'PreparedBy',
    headerName: 'prepared By',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'FilledBy',
    headerName: 'Filed By',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 120

  }, {
    field: 'Remark',
    headerName: 'Remark',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 120

  }
];
form: any;
isFinancialYearInvalid: any;
isReturnTypeInvalid: any;
formSubmitted: boolean = false;

ngOnInit() {
  this.GettdsReturnList()
}

  NewReturnModel: NewReturnModel = new NewReturnModel();
  formData: any = {};
  constructor( private router:Router,
  private alertService: AlertService,
  private messageServices: MessageService,
  private tdsReturndashboardService: TDSReturnDashboardService) {


}
selectEmployee(employees: any) {

}
onRowAction(data: any) {

}
//pop-up for new-return-from
onClickNewReturn()
{
  document.getElementById('newreturnmodel').click();
  this.resetForm(this.form);
}
resetForm(newreturn: NgForm) {
  this.formSubmitted = false;
  this.formData = {}; // Reset form data if needed
}
//Save pop-up form for new retrun on new-retun button
OnSaveClick(newreturn: NgForm) {
  this.formSubmitted = true;
  if (newreturn.valid) {

    const userId = 20;
    const deductorId = 10;

    this.formData.UserId = userId;
    this.formData.DeductorId = deductorId;
    this.tdsReturndashboardService.insertNewReturn(this.formData).subscribe(
      (result: any) => {
        let serviceResponse = result.Value;
        if (serviceResponse == ResponseCode.Success) {
          this.alertService.ShowSuccessMessage(this.messageServices.savedSuccessfully);
          document.getElementById('closemodal2').click();
          //this.GettdsReturnList();sssss
          this.resetForm(newreturn); // Reset the form after successful submission
          //this.GettdsReturnList(); // Optionally, reload the data
        } else {
          this.alertService.ShowErrorMessage(this.messageServices.serviceError);
        }
      },
      (error: any) => {
        this.alertService.ShowErrorMessage(error.error);
      }
    );
  } else {
    console.log("Form is invalid");
  }
}


//get-dataEditById

// GettdsReturnList(ReturnId: any) {
//   console.log(this.GettdsReturnList(ReturnId));
//   this.tdsReturndashboardService.gettdsReturnList(ReturnId).subscribe(
//     (result: any) => {
//       let serviceResponse = result; 
//       if (serviceResponse.Item2 == ResponseCode.Success) {
//         this.NewReturnModel = serviceResponse.Item1;
//       } else {
//         this.alertService.ShowErrorMessage(this.messageServices.serviceError);
//       }
//     },
//     (error: any) => {
//       if (error.error && error.error.message) {
//         this.alertService.ShowErrorMessage(error.error.message);
//       } else {
//         this.alertService.ShowErrorMessage("An error occurred while processing your request.");
//       }
//     }
//   );
// }

//list-patched in agd-grid

//GetFinanancialYearList
GettdsReturnList() {
  this.tdsReturndashboardService.gettdsReturnList().subscribe(
    (result: any) => {
      this.tdsReturnList = result.Value;
      let tdsReturnList = result.Value;
    //   let serviceResponse = result.Value;
    //   console.log(result.value)
    //   this.tdsReturnList = serviceResponse;
    //   if (serviceResponse == ResponseCode.Success) {
    //     this.alertService.ShowSuccessMessage(this.messageServices.savedSuccessfully);
    //     document.getElementById('closemodal2').click();
    //   } else {
    //     this.alertService.ShowErrorMessage(this.messageServices.serviceError);
    //   }
    // },
    // (error: any) => {
    //   this.alertService.ShowErrorMessage(error.error);
    }
  );
}


//GetRetrunTypeList
GetreturnTypeList() {  
  this.tdsReturndashboardService.getreturnTypeList().subscribe(
    (result: any) => {

      this.returnTypeList = result.Value;
    },
    (error: any) => {
      this.alertService.ShowErrorMessage(error.error);
    }
  );

}
//GetQuartTypeList
GetquarterTypeList() {  
  this.tdsReturndashboardService.getquarterTypeList().subscribe(
    (result: any) => {

      this.quarterTypeList = result.Value;
    },
    (error: any) => {
      this.alertService.ShowErrorMessage(error.error);
    }
  );

}
//GetStatmenttypelist
GetstatementTypeList() {  
  this.tdsReturndashboardService.getstatementTypeList().subscribe(
    (result: any) => {

      this.statementTypeList = result.Value;
    },
    (error: any) => {
      this.alertService.ShowErrorMessage(error.error);
    }
  );
}
}
