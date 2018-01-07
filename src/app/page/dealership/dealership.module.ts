import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealershipRoutingModule } from './dealership-routing.module';
import { DealershipComponent } from './dealership.component';
import {FilterModule} from '../../module/filter/filter.module';
import {VehiclelistModule} from '../../module/vehiclelist/vehiclelist.module';

@NgModule({
  imports: [
    CommonModule,
    DealershipRoutingModule,
    FilterModule,VehiclelistModule
  ],
  declarations: [DealershipComponent]
})
export class DealershipModule { }
