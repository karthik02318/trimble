/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {DealershipService} from './services/dealership.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,BrowserAnimationsModule
  ],
  providers: [ DealershipService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
