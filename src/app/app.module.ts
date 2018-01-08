/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {fakeBackendProvider} from '../fakebackend/fake-backend';
import {$http} from './util/HttpService';
import {DealershipService} from './services/dealership.service';
import {BaseRequestOptions, ConnectionBackend, Http, HttpModule, RequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpModule,BrowserAnimationsModule
  ],
  providers: [fakeBackendProvider,
    MockBackend,
    BaseRequestOptions, $http, DealershipService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
