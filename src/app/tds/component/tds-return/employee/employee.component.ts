import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TableColumn } from 'src/app/shared/data-grid/model/data-grid-column.model';
import { ActionColumn } from "src/app/shared/data-grid/model/data-grid-column.model";
import { AddEmployeeService } from './add-employee/add-employee.service';
import { ResponseCode } from 'src/app/core/models/responseObject.model';
import { MessageService } from 'src/app/core/services/message.service';
import { AlertService } from 'src/app/core/services/alertService';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  // EmployeeDetailId=32;
  tdsReturnList: any[] = [];
  form: FormGroup;
  
  declaredTableColumns: TableColumn[] = [
    {
      field: 'EmployeeDetailId',
      headerName: 'SR NO',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 80
    },
    {
      field: 'EMPID',
      headerName: 'Emp ID',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'Name',
      headerName: 'NAME',
      filter: 'agSetColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'PANNo',
      headerName: 'PAN',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'SectionCode',
      headerName: 'Sec',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'DateOfPayment',
      headerName: 'Date of Payment',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 150

    },
    {
      field: 'AmountPaid',
      headerName: 'Amount Paid',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 150

    },
    {
      field: 'TDSAmount',
      headerName: 'TDS',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'Surcharge',
      headerName: 'Surcharge',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'EducationCess',
      headerName: 'Ed. Cess',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'totalDeduction',
      headerName: 'Total Deduction',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 150

    },
    {
      field: 'totalDeposited',
      headerName: 'Total Deposited',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 150

    },
    {
      field: 'DateOfDeduction',
      headerName: 'Deduction Date',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 150

    }, {
      field: 'Total',
      headerName: 'Total',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'Balance',
      headerName: 'Balance',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'Status',
      headerName: 'Status',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    }
  ];
  getEmployeeList: any;



  ngOnInit(): void {
    this.GetEmployeeList();
      }

  constructor(private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private alertService: AlertService,
    private addEmployeeService: AddEmployeeService,
    private formBuilder: FormBuilder) {
   {
        this.form = this.formBuilder.group({
          // Define form controls with validators as needed
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          // Add more form controls as needed
        });
      }
  }
  selectEmployee(employees: any) {

  }
  editEmployee(employeeData: any) {

    const employeeId = employeeData.EmpID;
    const index = this.tdsReturnList.findIndex(emp => emp.EmpID === employeeId);
    if (index !== -1) {
    this.openEditForm(employeeData).then((editedEmployeeData: any) => {
    this.tdsReturnList[index] = editedEmployeeData;
    console.log('Edited Employee:', editedEmployeeData);
  });
    }
  }

  openEditForm(employeeData: any): Promise<any> {

    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const editedEmployeeData = { ...employeeData };

        editedEmployeeData.Status = 'Edited';
        resolve(editedEmployeeData);
      }, 1000);
    });
  }

  onRowAction(data: any) {
    let data1 = {
      'source': 'edit',
      'EmployeeDetailId': data.row.EmployeeDetailId
    }
    this.router.navigate(['/tds/tds-return/add-employee'], { queryParams: data1 });
  }



  declaredActionColumns: ActionColumn[] = [
    {
      action: 'view',
      actionPage: 'ViewEmployee',
      actionIcon: 'uil uil-cog rounded text-secondary mb-0',
      buttonClass: 'btn btn-sm btn-secondary',
      colorClass: 'text-secondary h4'
    },
  ];
  onAddEmployee(employee?: any) {

    let navigationExtras: NavigationExtras = {};
    if (employee) {
      navigationExtras = {
        state: {
          employeeData: employee
        }
      };
    }
    this.router.navigateByUrl('tds/tds-return/add-employee')
  }

  onUploadExelClick() {
    let data1: string = "employee"
    const data = {
      source: 'employee'
    };

    this.router.navigate(['tds/tds-return/upload-exel'], { queryParams: data });

  }
  onActionButton(action: string) {
    alert(action + ' ' + 'action button clicked.');
  }
  

  GetEmployeeList() {
    this.addEmployeeService.getEmployeeList().subscribe(
      (result: any) => {
        this.tdsReturnList = result.Value;
        let tdsReturnList = result.Value;
      },
      (error: any) => {
        console.error("Error occurred while fetching employee details:", error); 
        this.alertService.ShowErrorMessage("An error occurred while fetching employee details. Please try again later."); 
  }
);
  }
}