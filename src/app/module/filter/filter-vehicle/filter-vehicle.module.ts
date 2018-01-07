import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterVehicleComponent} from './filter-vehicle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterVehicleComponent],
  exports:[FilterVehicleComponent]
})
export class FilterVehicleModule { }
