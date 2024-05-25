import { Injectable } from '@angular/core';
import { APIService } from 'src/app/core/services/apiService';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private getDeductorDetailsListByIdURL: string = "DeductorBasicInfo/getDeductorDetailsListById";

  constructor(private apiService : APIService) { }

  getDeductorDetailsListById(userId : number){
    return this.apiService.getData(this.getDeductorDetailsListByIdURL + '/' + userId)
  }
}
