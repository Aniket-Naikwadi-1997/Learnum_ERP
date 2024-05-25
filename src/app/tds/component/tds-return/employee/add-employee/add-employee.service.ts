import { Injectable } from '@angular/core';
import { APIService } from 'src/app/core/services/apiService';
import { EmployeeDetails } from './employee-details.model';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/core/services/baseService';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService extends BaseService{
  

  private urlInsertEmployee: string = "EmployeeDetails/insertEmployeeDetails";
  private urlGetEmployee: string = "EmployeeDetails/getEmployeeDetails";
  private urlgetSectionCodeList: string = "ApplicationMaster/GetSectionCode";
  private getReasonURL: string = "ApplicationMaster/GetReasontype";
  private urlgetEmployeeList: string = "EmployeeDetails/getAllEmployeeList";

  constructor(private apiService: APIService) {
    super();
  }

  insertEmployeeData(EmployeeDetails: EmployeeDetails) {
    return this.apiService.postData(this.urlInsertEmployee, EmployeeDetails);
  }

  getEmployeeDetails(EmployeeDetailId: number) {
    return this.apiService.getData(this.urlGetEmployee + '/' + EmployeeDetailId);
  }

  getEmployeeList() {
    return this.apiService.getData(this.urlgetEmployeeList);
  }

  getReason() {
    return this.apiService.getData(this.getReasonURL);
  }
  getSectionCodeList() {
    return this.apiService.getData(this.urlgetSectionCodeList);
  }

  
}
