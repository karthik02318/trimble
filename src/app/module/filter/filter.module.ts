import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterComponent} from './filter.component';
import {FilterVehicleModule} from './filter-vehicle/filter-vehicle.module';

@NgModule({
  imports: [
    CommonModule,FilterVehicleModule
  ],
  declarations: [FilterComponent],
  exports:[FilterComponent]
})
export class FilterModule { }
