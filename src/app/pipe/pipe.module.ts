import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MathcesTypePipe} from './mathces-type.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MathcesTypePipe],
  exports:[MathcesTypePipe]
})
export class PipeModule { }
