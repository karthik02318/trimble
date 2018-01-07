/**
 * Created by karthik.ar on 18-09-2017.
 */
import {
  BaseRequestOptions,
  Http,
  RequestMethod,
  RequestOptions,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
  // configure fake backend
  backend.connections.subscribe((connection: MockConnection) => {
    // wrap in timeout to simulate server api call

    setTimeout(() => {
      if (connection.request.url.search('api/filterlist') > -1 && connection.request.method === RequestMethod.Get) {
        connection.mockRespond(new Response(new ResponseOptions({
          status: 200,
          body: [{
            'FilterName': 'SUV',
            'FilterTypeId': 1,
            'FilterColor': 'green'
          }, {
            'FilterName': 'TRUCK',
            'FilterTypeId': 2,
            'FilterColor': 'red'
          }, {
            'FilterName': 'SEDAN',
            'FilterTypeId': 3,
            'FilterColor': 'black'
          }]
        })));
        return;
      }
      if (connection.request.url.search('api/vehiclelist') > -1 && connection.request.method === RequestMethod.Get) {
        connection.mockRespond(new Response(new ResponseOptions({
          status: 200,
          body: [{
            "ImagePath": "SUV",
            "SerialNumber": "FLT32541",
            "VehicalTypeId": "1",
            "VehicalType": "SUV",
            "FuelLevel": "40%",
            "Distance": "120",
            "SapID": "1",
            "LegacyID": "1",
            "Make": "1",
            "Model": "1",
            "Year": "1",
            "LastReported": "1"
          },{
            "ImagePath": "SUV",
            "SerialNumber": "FLT32541",
            "VehicalTypeId": "1",
            "VehicalType": "SUV",
            "FuelLevel": "40%",
            "Distance": "120",
            "SapID": "1",
            "LegacyID": "1",
            "Make": "1",
            "Model": "1",
            "Year": "1",
            "LastReported": "1"
          },{
            "ImagePath": "SUV",
            "SerialNumber": "FLT32541",
            "VehicalTypeId": "1",
            "VehicalType": "SUV",
            "FuelLevel": "40%",
            "Distance": "120",
            "SapID": "1",
            "LegacyID": "1",
            "Make": "1",
            "Model": "1",
            "Year": "1",
            "LastReported": "1"
          },{
            "ImagePath": "SUV",
            "SerialNumber": "FLT32541",
            "VehicalTypeId": "1",
            "VehicalType": "SUV",
            "FuelLevel": "40%",
            "Distance": "120",
            "SapID": "1",
            "LegacyID": "1",
            "Make": "1",
            "Model": "1",
            "Year": "1",
            "LastReported": "1"
          }]
        })));
        return;
      }


      let realHttp = new Http(realBackend, options);
      let requestOptions = new RequestOptions({
        method: connection.request.method,
        headers: connection.request.headers,
        body: connection.request.getBody(),
        url: connection.request.url,
        withCredentials: connection.request.withCredentials,
        responseType: connection.request.responseType
      });
      realHttp.request(connection.request.url, requestOptions)
        .subscribe((response: Response) => {
            connection.mockRespond(response);
          },
          (error: any) => {
            connection.mockError(error);
          });

    }, 1);

  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
