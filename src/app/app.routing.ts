import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundModule} from './page/page-not-found/page-not-found.module';

const routes: Routes = [
  { path: '', loadChildren: './page/dealership/dealership.module#DealershipModule' },
  { path: 'detail/:id', loadChildren: './page/detail/detail.module#DetailModule' },
  { path: '**', loadChildren: './page/page-not-found/page-not-found.module#PageNotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
