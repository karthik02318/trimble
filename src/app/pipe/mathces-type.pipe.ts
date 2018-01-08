import {Pipe, PipeTransform} from '@angular/core';
import {Ivehicle} from '../interfaces/vehicle.interface';

@Pipe({
  name: 'mathcesType'
})
export class MathcesTypePipe implements PipeTransform {

  transform(vehiclesList: Array<Ivehicle>, vehicleTypeId: number): any {
    if (!vehicleTypeId) {
      return vehiclesList;
    }
    let a = vehiclesList.filter(vehicle => vehicle.vehicleTypeId === vehicleTypeId);
    return a;
  }

}
