import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import * as moment from 'moment';
import { ResponseCode } from 'src/app/core/models/responseObject.model';
import { MessageService } from 'src/app/core/services/message.service';
import { AddEmployeeService } from './add-employee.service'
import { AlertService } from 'src/app/core/services/alertService';
import { EmployeeDetails } from './employee-details.model';
import { FormGroup, FormBuilder,Validators, AbstractControl } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})

export class AddEmployeeComponent implements OnInit {
  form = new FormGroup({});
  employeeDetails: EmployeeDetails = new EmployeeDetails();
  reasonList: any[] = [];
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};
  editData: any;
  tdsReturnList: any;
  GetEmployeeList: any;
  coOwners: any;
  NowDate: any = new Date();
 
  constructor(
    private addEmployeeService: AddEmployeeService,
    private router: Router,
    private alertService: AlertService,
    private messageService: MessageService,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setParameter();
    this.getReason();
    this.createForm();
    this.editData = this.activateRoute.snapshot.queryParams;
    if (this.editData.source === 'edit' && this.editData.EmployeeDetailId) {
      this.getEmployeeDetails(this.editData.EmployeeDetailId);
    }
    
  }
  createForm(): void {
    this.form = this.fb.group({
      EMPID: ['', Validators.required], 
      Name: ['', Validators.required], 
      PANNo: ['', Validators.required], 
      SectionCodeId: ['', Validators.required], 
      DateOfPayment: ['', Validators.required], 
      DateOfDeduction: ['', Validators.required], 
      AmountPaid: ['', Validators.required],
      TDSAmount: ['', Validators.required], 
      EducationCess: ['', Validators.required], 
      Surcharge: ['', Validators.required], 
      ReasonTypeId: ['', Validators.required], 
      CertificateNo: ['', Validators.required], 
    });
  }


  getReason() {
    this.addEmployeeService.getReason().subscribe(
      (result: any) => {
        this.reasonList = result.Value;
        this.setParameter();
      },
      (error) => {
        // Handle error
      }
    );
  }

  getEmployeeDetails(EmployeeDetailId: number) {
    this.addEmployeeService.getEmployeeDetails(EmployeeDetailId).subscribe(
      (result: any) => {
        if (result && result.Value && result.Value.Item1) {
          this.employeeDetails = result.Value.Item1;
          
          //DateofPayment && DateOfDeduction
          this.employeeDetails.DateOfPayment = this.addEmployeeService.formatDate(this.employeeDetails.DateOfPayment);
          this.employeeDetails.DateOfDeduction = this.addEmployeeService.formatDate(this.employeeDetails.DateOfDeduction);

          this.setParameter();
        } else {
          console.error('No data found for EmployeeDetailId: ' + EmployeeDetailId);

        }
      },
      (error: any) => {
        console.error('Error retrieving employee details:', error);

        if (error && error.status === 404) {
          console.error('Employee not found.');

        } else {
          console.error('An unexpected error occurred. Please try again later.');

        }
      }
    );
  }


setParameter() {
    this.fields = [
      {
        fieldGroupClassName: 'row card-body p-2',
        // key: 'ITDPreEmploymentSalModel',
        fieldGroup: [

          {
            className: 'col-md-3',
            type: 'input',
            key: 'EMPID',
            templateOptions: {
              placeholder: 'Enter Employee ID',
              type: 'text',
              label: "Employee ID",
              required: true,
              attributes: {
                style: 'text-transform: uppercase'
              }

            },
            validators: {
              name: {
                expression: (c: AbstractControl) => !c.value || /^[a-zA-Z0-9]+$/.test(c.value),
                message: (error: any, field: FormlyFieldConfig) => `Please enter a valid ID.`,
              },
            },
            },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'Name',
            props: { 
              placeholder: 'Enter Name',
              type: 'text',
              label: "Name",
              required: true,
              pattern: '^[A-Za-z]+$',
              title: 'Only characters are allowed',
            },
            validation: {
              messages: {
                required: 'Name is required',
                pattern: 'Please enter a valid name ',
              },
            },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'PANNo',
            props: {
              placeholder: 'Enter PAN',
              required: true,
              type: 'text',
              label: "PAN",
              attributes: {
                style: 'text-transform: uppercase'
              }
            },
            validators: {
              ip: {
                expression: (c: AbstractControl) => !c.value || /^[A-Za-z]{3}[PCHFATBLJGgpchfatblj]{1}[A-Za-z]{1}[0-9]{4}[A-Za-z]{1}$/.test(c.value),
                message: (error: any, field: FormlyFieldConfig) => `Please Enter Valid PAN `,
              },
            },
            validation: {
              messages: {
                required: 'This field is required',
                ip: 'Please enter a valid PAN'
              },
            },
          },


          {
            className: 'col-md-3',
            type: 'select',
            key: 'SectionCodeId',
            props: {
              //placeholder: 'Select section code',
              required: true,
              valueProp: 'value',
              labelProp: 'label',
              label: "Section Code",
              options: [
               {label: 'Select section code', disabled: true },
                { value: 1, label: '92B' },
                { value: 2, label: '456Q' }
              ],
              // Disable manual input by setting the input type to 'select' explicitly
              //inputType: 'select',
            },
            validation: {
              messages: {
                required: 'Please select a Section Code',
              },
            },
          }, 
          {
            className: 'col-md-3',
            type: 'input',
            key: 'DateOfPayment',
            templateOptions: {
              label: 'Date of Payment/Credit',
              placeholder: 'Date',
              type: 'date',
              required: true,
              attributes: {
                max: formatDate(this.NowDate, 'YYYY-MM-dd', 'en-IN'),
            },

            },
            validation: {
              messages: {
                required: 'This field is required', 
              },
            },
          },
        
          {
            className: 'col-md-3',
            type: 'input',
            key: 'DateOfDeduction',
            templateOptions: {
              // label: this.previousEmployement.previousEmployement[4].
              // investmentColumnTypeName,
              label: "Date of Deduction",
              placeholder: 'Enter GSTN',
              required: true,
              type: 'date', attributes: {
                max: formatDate(this.NowDate, 'YYYY-MM-dd', 'en-IN'),
            },
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
            },
            // props: {
            //   label: "Employment Start Date",
            //   // label: this.previousEmployement.previousEmployement[5].
            //   //     investmentColumnTypeName,
            //   maxDate: this.minJoinDate,
            //   minDate: this.minDate,
            //   change: (field, event) => {
            //     const form = field.parent.formControl;
            //     let enterDate = moment(form.get('employeementStartDate').value).format('YYYY-MM-DD')
            //     if (enterDate > this.minJoinDate || enterDate < this.minDate) {
            //       form.get('employeementStartDate').setValue('')
            //     }

            //   }
            // },
            validation: {
              messages: {
                required: 'This field is required',
              },
            },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'AmountPaid',
            props: {
              placeholder: 'Enter Amount',
              required: true,
              type: 'number',
              label: "Amount Paid",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[10].
              // investmentColumnTypeName
            },
            validation: {
              messages: {
                required: 'This field is required',
              },
            },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'TDSAmount',
            props: {
              placeholder: 'TDS',
              required: true,
              type: 'number',
              label: "TDS",
              defaultValue:0,
              //step: '0.01',
            },
            validators: {
              tds: {
                expression: (c: AbstractControl) => !c.value || /^[0-9]*$/.test(c.value),
                message: (error: any, field: FormlyFieldConfig) => `${field.formControl.value} is not a valid TDS Amount`,
              },
            },
            validation: {
              messages: {
                required: 'This field is required',
                tds: 'Please enter a valid TDS Amount',
              },
            },
          },
          
          {
            className: 'col-md-3',
            type: 'input',
            key: 'EducationCess',
            props: {
              placeholder: 'Enter Education Cess',
              required: true,
              type: 'number',
              label: "Education Cess",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[8].
              // investmentColumnTypeName
            },
            validation: {
              messages: {
                required: 'This field is required', 
              },
            },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'Surcharge',
            props: {
              placeholder: 'enter Surcharge',
              required: true,
              type: 'number',
              label: "Surcharge",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[8].
              // investm`entColumnTypeName
            },
            validation: {
              messages: {
                required: 'This field is required', // Custom error message for required validation
              },
            },
          },
          {
            className: 'col-md-3',
            type: 'select',
            key: 'ReasonTypeId',
            props: {
              //placeholder: 'Select Type',
              required: true,
              valueProp: 'ReasonTypeId',
              labelProp: 'ReasonType',
              label: "Reason",   
              //options: this.reasonList,
              options: [
                { ReasonType: 'Select Reason Type', disabled: true, selected: true },
                ...this.reasonList,
              ],

              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[9].
              // investmentColumnTypeName
            },
            validation: {
              messages: {
                required: 'This field is required', 
              },
            },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'CertificateNo',
            props: {
              placeholder: 'Enter Certificate Number',
              required: true,
              type: 'string',
              label: "Certificate Number",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[8].
              // investmentColumnTypeName
            }
            , validation: {
              messages: {
                required: 'This field is required', 
              },
            },
          },
        ],
      },
    ]
  }

  onCancleClick() {
    this.router.navigateByUrl('tds/tds-return/employee');
  }

  get f()
  {
    return this.form.controls;
  }

  onSubmit():void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.insertAddEmployee();
      this.GetEmployeeList();
    }
    else {
      this.alertService.ShowErrorMessage('Please fill in all required fields.');
    }
  }

  insertAddEmployee() {
    this.employeeDetails.AddedBy = 1;
    this.employeeDetails.AddedDate = new Date();
    this.employeeDetails.UpdatedBy = 1;
    this.employeeDetails.UpdatedDate = new Date();
    this.employeeDetails.IsActive = true;

    this.addEmployeeService.insertEmployeeData(this.employeeDetails).subscribe(
      (result: any) => {
        let serviceResponse = result.Value
        if (result.Value === ResponseCode.Success) {
          this.alertService.ShowSuccessMessage(this.messageService.savedSuccessfully);

        }
        else if (serviceResponse == ResponseCode.Update) {
          this.alertService.ShowSuccessMessage(this.messageService.updateSuccessfully);
        }
        else {
          this.alertService.ShowErrorMessage(this.messageService.serviceError);
        }
      },
      (error: any) => {
        this.alertService.ShowErrorMessage("Enter all required fields");
      }
    )
    this.router.navigateByUrl('tds/tds-return/employee');
  }


}
