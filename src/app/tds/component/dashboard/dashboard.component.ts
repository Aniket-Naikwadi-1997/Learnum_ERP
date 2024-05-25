import { Component, ElementRef, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { ActionColumn, TableColumn } from "src/app/shared/data-grid/model/data-grid-column.model";
import { DashboardService } from "./dashboard.service";
import { ConfigurationSettings } from "src/app/core/models/configuration";
import { UserProfileService } from "src/app/core/services/user-profile.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  userId: any;
  options = [
    { value: '1', label: 'All' },
    { value: '2', label: 'Tata Motors Ltd.' },
    { value: '3', label: 'Tata Autocomp Ltd' }

  ]
  data = [];

  rowSelection: 'single' | 'multiple' = 'multiple';

  declaredTableColumns: TableColumn[] = [
    {
      field: 'sr_No',
      headerName: 'SR NO',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100
    },
    {
      field: 'DeductorName',
      headerName: 'DEDUCTOR NAME',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
    },
    {
      field: 'TAN',
      headerName: 'TAN',
      filter: 'agSetColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'PAN',
      headerName: 'PAN',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 120

    },
    {
      field: 'GSTN',
      headerName: 'GSTN',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
    },
    {
      field: 'ResponsiblePersonName',
      headerName: 'RESPONSIBLE PERSON',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 120

    },
    {
      field: 'MobileNo',
      headerName: 'MOBILE NUMBER',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 120

    },
    {
      field: 'IsActive',
      headerName: 'STATUS',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 120

    }
  ];
  declaredActionColumns: ActionColumn[] = [
    {
      action: 'view',
      actionPage: 'ViewEmployee',
      actionIcon: 'uil uil-cog rounded text-secondary mb-0',
      buttonClass: 'btn btn-sm btn-secondary',
      colorClass: 'text-secondary h4'
    },

  ];


  constructor(
    private router: Router,
    private dashBoardServices: DashboardService,
    private userProfileService: UserProfileService
  ) {

  }
  ngOnInit(): void {
    this.userId = this.userProfileService.getUserId();
    this.getDeductorDetailsListById(this.userId);
  }
  onRowClicked(data: any) {
    ConfigurationSettings.setDeductorId(data.DeductorId);
    this.router.navigate(['/tds/tds-return-dashboard'])
  }

  onRowAction(data: any) {
    ConfigurationSettings.setDeductorId(data.row.DeductorId);
    let data1 = {
      'source': 'edit',
      'deductorId': data.row.DeductorId
    }
    this.router.navigate(['/tds/deductor-details/basic-info'], { queryParams: data1 });
  }

  onActionButton(action: string) {
    alert(action + ' ' + 'action button clicked.');
  }
  selectEmployee(employees: any) {

  }

  onClickNewDeductor() {
    let data = {
      'source': 'add',
    }
    this.router.navigate(['tds/deductor-details/basic-info'], { queryParams: data });
  }

  getDeductorDetailsListById(userId: number) {
    this.dashBoardServices.getDeductorDetailsListById(userId).subscribe(
      (result) => {
        let data = result.Value;
        this.data = data;
        console.log(this.data);
      }, (error) => {

      });
  }
}
