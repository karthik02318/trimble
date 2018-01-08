import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclelistComponent } from './vehiclelist.component';
import {PipeModule} from '../../pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,PipeModule
  ],
  declarations: [VehiclelistComponent],
  exports:[VehiclelistComponent]
})
export class VehiclelistModule { }
