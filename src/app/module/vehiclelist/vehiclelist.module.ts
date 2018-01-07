import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclelistComponent } from './vehiclelist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehiclelistComponent],
  exports:[VehiclelistComponent]
})
export class VehiclelistModule { }
