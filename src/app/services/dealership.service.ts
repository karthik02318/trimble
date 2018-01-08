import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {$http} from '../util/HttpService';
import {API} from '../constant/api';

@Injectable()
export class DealershipService {

  constructor(private http: $http) {

  }

  /**
   * This service method has no arguments, It returns all the vehicle filter result
   * @returns {Observable<any>}
   */
  getFilerList() {
    return this.http.get(API.FILTERLIST,{})
      .map((response: Response) => {
        return response.json();
      });
  }
  /**
   * This service method has no arguments, It returns all the vehicle list
   * @returns {Observable<any>}
   */
  getVehiclesList() {
    return this.http.get(API.VEHICLELIST,{})
      .map((response: Response) => {
        return response.json();
      });
  }
  /**
   * This service method has no arguments, It returns all the vehicle list
   * @returns {Observable<any>}
   */
  getVehicleById(vehicleID) {
    return this.http.get(API.VEHICLEBYID,{id:vehicleID})
      .map((response: Response) => {
        return response.json();
      });
  }
}
