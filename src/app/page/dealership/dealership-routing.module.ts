import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DealershipComponent} from './dealership.component';

const routes: Routes = [
  { path: '', component: DealershipComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealershipRoutingModule { }
