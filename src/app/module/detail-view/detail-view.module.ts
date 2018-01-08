import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailViewRoutingModule } from './detail-view-routing.module';
import { DetailViewComponent } from './detail-view.component';

@NgModule({
  imports: [
    CommonModule,
    DetailViewRoutingModule
  ],
  declarations: [DetailViewComponent],
  exports:[DetailViewComponent]
})
export class DetailViewModule { }
