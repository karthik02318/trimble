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
    let vehicleList = [{
      "id":1,
      "imagePath": "1",
      "serialNumber": "FLT12341",
      "vehicleTypeId": 1,
      "vehicleType": "SUV",
      "fuelLevel": 40,
      "distance": 120,
      "sapID": "SUV1589",
      "legacyID": "34567",
      "make": "Ford",
      "model": "Ecosport",
      "year": "2014",
      "lastReported": "Broadway",
      "serviceDue": 100,
      "gpsId": 122,
      "vehicleOwner": "Jose",
      "noDrivers": 5,
      "chargePerHour": 10,
      "parkingGarage": "Lincoln street",
      "transmission": "Manual",
      "numberPlate": "USHF514",
      "lastTrip": 100,
      "fuelCost": 50,
      "laborCost": 20,
      "odoMeter": 15000,
      "oilLevel": "green",
      "tierPressureLevel": "yellow",
      "idealHours": 120,
      "usedHours": 150,
      "renewal": 2019
    }, {
      "id":2,
      "imagePath": "2",
      "serialNumber": "FLT12342",
      "vehicleTypeId": 2,
      "vehicleType": "TRUCK",
      "fuelLevel": 20,
      "distance": 190,
      "sapID": "TRUCK1559",
      "legacyID": "56874",
      "make": "Ford",
      "model": "Ecosport",
      "year": "2014",
      "lastReported": "Broadway",
      "serviceDue": 100,
      "gpsId": 122,
      "vehicleOwner": "Jose",
      "noDrivers": 5,
      "chargePerHour": 10,
      "parkingGarage": "Lincoln street",
      "transmission": "Manual",
      "numberPlate": "USHF514",
      "lastTrip": 100,
      "fuelCost": 50,
      "laborCost": 20,
      "odoMeter": 15000,
      "oilLevel": "green",
      "tierPressureLevel": "yellow",
      "idealHours": 120,
      "usedHours": 150,
      "renewal": 2019
    }, {
      "id":3,
      "imagePath": "3",
      "serialNumber": "FLT12343",
      "vehicleTypeId": 3,
      "vehicleType": "SEDAN",
      "fuelLevel": 20,
      "distance": 190,
      "sapID": "SEDAN1559",
      "legacyID": "56874",
      "make": "Ford",
      "model": "Ecosport",
      "year": "2014",
      "lastReported": "Broadway",
      "serviceDue": 100,
      "gpsId": 122,
      "vehicleOwner": "Jose",
      "noDrivers": 5,
      "chargePerHour": 10,
      "parkingGarage": "Lincoln street",
      "transmission": "Manual",
      "numberPlate": "USHF514",
      "lastTrip": 100,
      "fuelCost": 50,
      "laborCost": 20,
      "odoMeter": 15000,
      "oilLevel": "green",
      "tierPressureLevel": "yellow",
      "idealHours": 120,
      "usedHours": 150,
      "renewal": 2019
    }, {
      "id":4,
      "imagePath": "4",
      "serialNumber": "FLT12344",
      "vehicleTypeId": 1,
      "vehicleType": "SUV",
      "fuelLevel": 40,
      "distance": 120,
      "sapID": "SUV1589",
      "legacyID": "34567",
      "make": "Ford",
      "model": "Ecosport",
      "year": "2014",
      "lastReported": "Broadway",
      "serviceDue": 100,
      "gpsId": 122,
      "vehicleOwner": "Jose",
      "noDrivers": 5,
      "chargePerHour": 10,
      "parkingGarage": "Lincoln street",
      "transmission": "Manual",
      "numberPlate": "USHF514",
      "lastTrip": 100,
      "fuelCost": 50,
      "laborCost": 20,
      "odoMeter": 15000,
      "oilLevel": "green",
      "tierPressureLevel": "yellow",
      "idealHours": 120,
      "usedHours": 150,
      "renewal": 2019
    }, {
      "id":5,
      "imagePath": "5",
      "serialNumber": "FLT12345",
      "vehicleTypeId": 2,
      "vehicleType": "TRUCK",
      "fuelLevel": 20,
      "distance": 190,
      "sapID": "TRUCK1559",
      "legacyID": "56874",
      "make": "Ford",
      "model": "Ecosport",
      "year": "2014",
      "lastReported": "Broadway",
      "serviceDue": 100,
      "gpsId": 122,
      "vehicleOwner": "Jose",
      "noDrivers": 5,
      "chargePerHour": 10,
      "parkingGarage": "Lincoln street",
      "transmission": "Manual",
      "numberPlate": "USHF514",
      "lastTrip": 100,
      "fuelCost": 50,
      "laborCost": 20,
      "odoMeter": 15000,
      "oilLevel": "green",
      "tierPressureLevel": "yellow",
      "idealHours": 120,
      "usedHours": 150,
      "renewal": 2019
    }, {
      "id":6,
      "imagePath": "6",
      "serialNumber": "FLT12346",
      "vehicleTypeId": 3,
      "vehicleType": "SEDAN",
      "fuelLevel": 20,
      "distance": 190,
      "sapID": "SEDAN1559",
      "legacyID": "56874",
      "make": "Ford",
      "model": "Ecosport",
      "year": "2014",
      "lastReported": "Broadway",
      "serviceDue": 100,
      "gpsId": 122,
      "vehicleOwner": "Jose",
      "noDrivers": 5,
      "chargePerHour": 10,
      "parkingGarage": "Lincoln street",
      "transmission": "Manual",
      "numberPlate": "USHF514",
      "lastTrip": 100,
      "fuelCost": 50,
      "laborCost": 20,
      "odoMeter": 15000,
      "oilLevel": "green",
      "tierPressureLevel": "yellow",
      "idealHours": 120,
      "usedHours": 150,
      "renewal": 2019
    }, {
      "id":7,
      "imagePath": "7",
      "serialNumber": "FLT12347",
      "vehicleTypeId": 1,
      "vehicleType": "SUV",
      "fuelLevel": 40,
      "distance": 120,
      "sapID": "SUV1589",
      "legacyID": "34567",
      "make": "Ford",
      "model": "Ecosport",
      "year": "2014",
      "lastReported": "Broadway",
      "serviceDue": 100,
      "gpsId": 122,
      "vehicleOwner": "Jose",
      "noDrivers": 5,
      "chargePerHour": 10,
      "parkingGarage": "Lincoln street",
      "transmission": "Manual",
      "numberPlate": "USHF514",
      "lastTrip": 100,
      "fuelCost": 50,
      "laborCost": 20,
      "odoMeter": 15000,
      "oilLevel": "green",
      "tierPressureLevel": "yellow",
      "idealHours": 120,
      "usedHours": 150,
      "renewal": 2019
    }, {
      "id":8,
      "imagePath": "8",
      "serialNumber": "FLT12348",
      "vehicleTypeId": 2,
      "vehicleType": "TRUCK",
      "fuelLevel": 20,
      "distance": 190,
      "sapID": "TRUCK1558",
      "legacyID": "56874",
      "make": "Ford",
      "model": "Ecosport",
      "year": "2014",
      "lastReported": "Broadway",
      "serviceDue": 100,
      "gpsId": 122,
      "vehicleOwner": "Jose",
      "noDrivers": 5,
      "chargePerHour": 10,
      "parkingGarage": "Lincoln street",
      "transmission": "Manual",
      "numberPlate": "USHF514",
      "lastTrip": 100,
      "fuelCost": 50,
      "laborCost": 20,
      "odoMeter": 15000,
      "oilLevel": "green",
      "tierPressureLevel": "yellow",
      "idealHours": 120,
      "usedHours": 150,
      "renewal": 2019
    }, {
      "id":9,
      "imagePath": "9",
      "serialNumber": "FLT12349",
      "vehicleTypeId": 3,
      "vehicleType": "SEDAN",
      "fuelLevel": 20,
      "distance": 190,
      "sapID": "SEDAN1559",
      "legacyID": "56874",
      "make": "Ford",
      "model": "Ecosport",
      "year": "2014",
      "lastReported": "Broadway",
      "serviceDue": 100,
      "gpsId": 122,
      "vehicleOwner": "Jose",
      "noDrivers": 5,
      "chargePerHour": 10,
      "parkingGarage": "Lincoln street",
      "transmission": "Manual",
      "numberPlate": "USHF514",
      "lastTrip": 100,
      "fuelCost": 50,
      "laborCost": 20,
      "odoMeter": 15000,
      "oilLevel": "green",
      "tierPressureLevel": "yellow",
      "idealHours": 120,
      "usedHours": 150,
      "renewal": 2019
    }];
    setTimeout(() => {
      if (connection.request.url.search('api/filterlist') > -1 && connection.request.method === RequestMethod.Get) {
        connection.mockRespond(new Response(new ResponseOptions({
          status: 200,
          body: [{
            'filterName': 'SUV',
            'filterTypeId': 1,
            'filterColor': 'green'
          }, {
            'filterName': 'TRUCK',
            'filterTypeId': 2,
            'filterColor': 'red'
          }, {
            'filterName': 'SEDAN',
            'filterTypeId': 3,
            'filterColor': 'black'
          }]
        })));
        return;
      }
      if (connection.request.url.search('api/vehiclelist') > -1 && connection.request.method === RequestMethod.Get) {
        connection.mockRespond(new Response(new ResponseOptions({
          status: 200,
          body: vehicleList
        })));
        return;
      }
      if (connection.request.url.search('api/vehiclebyid') > -1 && connection.request.method === RequestMethod.Get) {
        let id:number = +(connection.request.url[connection.request.url.length-1])-1;
        connection.mockRespond(new Response(new ResponseOptions({
          status: 200,
          body: vehicleList[id]
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
