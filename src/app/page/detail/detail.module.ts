import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import {DetailViewModule} from '../../module/detail-view/detail-view.module';

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
    DetailViewModule
  ],
  declarations: [DetailComponent]
})
export class DetailModule { }
