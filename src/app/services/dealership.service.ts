import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {API} from '../constant/api';

@Injectable()
export class DealershipService {
  private vehicleList = [
    {
      'id': 1,
      'imagePath': '1',
      'serialNumber': 'FLT12341',
      'vehicleTypeId': 1,
      'vehicleType': 'SUV',
      'fuelLevel': 40,
      'distance': 120,
      'sapID': 'SUV1589',
      'legacyID': 34567,
      'make': 'Ford',
      'model': 'Ecosport',
      'year': '2014',
      'lastReported': 'Broadway',
      'serviceDue': 100,
      'gpsId': 122,
      'vehicleOwner': 'Jose',
      'noDrivers': 5,
      'chargePerHour': 10,
      'parkingGarage': 'Lincoln street',
      'transmission': 'Manual',
      'numberPlate': 'USHF514',
      'lastTrip': 100,
      'fuelCost': 50,
      'laborCost': 20,
      'odoMeter': 15000,
      'oilLevel': 'green',
      'tierPressureLevel': 'yellow',
      'idealHours': 120,
      'usedHours': 150,
      'renewal': 2019
    }, {
      'id': 2,
      'imagePath': '2',
      'serialNumber': 'FLT12342',
      'vehicleTypeId': 2,
      'vehicleType': 'TRUCK',
      'fuelLevel': 20,
      'distance': 190,
      'sapID': 'TRUCK1559',
      'legacyID': 56874,
      'make': 'Ford',
      'model': 'Ecosport',
      'year': '2014',
      'lastReported': 'Broadway',
      'serviceDue': 100,
      'gpsId': 122,
      'vehicleOwner': 'Jose',
      'noDrivers': 5,
      'chargePerHour': 10,
      'parkingGarage': 'Lincoln street',
      'transmission': 'Manual',
      'numberPlate': 'USHF514',
      'lastTrip': 100,
      'fuelCost': 50,
      'laborCost': 20,
      'odoMeter': 15000,
      'oilLevel': 'green',
      'tierPressureLevel': 'yellow',
      'idealHours': 120,
      'usedHours': 150,
      'renewal': 2019
    }, {
      'id': 3,
      'imagePath': '3',
      'serialNumber': 'FLT12343',
      'vehicleTypeId': 3,
      'vehicleType': 'SEDAN',
      'fuelLevel': 20,
      'distance': 190,
      'sapID': 'SEDAN1559',
      'legacyID': 56874,
      'make': 'Ford',
      'model': 'Ecosport',
      'year': '2014',
      'lastReported': 'Broadway',
      'serviceDue': 100,
      'gpsId': 122,
      'vehicleOwner': 'Jose',
      'noDrivers': 5,
      'chargePerHour': 10,
      'parkingGarage': 'Lincoln street',
      'transmission': 'Manual',
      'numberPlate': 'USHF514',
      'lastTrip': 100,
      'fuelCost': 50,
      'laborCost': 20,
      'odoMeter': 15000,
      'oilLevel': 'green',
      'tierPressureLevel': 'yellow',
      'idealHours': 120,
      'usedHours': 150,
      'renewal': 2019
    }, {
      'id': 4,
      'imagePath': '4',
      'serialNumber': 'FLT12344',
      'vehicleTypeId': 1,
      'vehicleType': 'SUV',
      'fuelLevel': 40,
      'distance': 120,
      'sapID': 'SUV1589',
      'legacyID': 34567,
      'make': 'Ford',
      'model': 'Ecosport',
      'year': '2014',
      'lastReported': 'Broadway',
      'serviceDue': 100,
      'gpsId': 122,
      'vehicleOwner': 'Jose',
      'noDrivers': 5,
      'chargePerHour': 10,
      'parkingGarage': 'Lincoln street',
      'transmission': 'Manual',
      'numberPlate': 'USHF514',
      'lastTrip': 100,
      'fuelCost': 50,
      'laborCost': 20,
      'odoMeter': 15000,
      'oilLevel': 'green',
      'tierPressureLevel': 'yellow',
      'idealHours': 120,
      'usedHours': 150,
      'renewal': 2019
    }, {
      'id': 5,
      'imagePath': '5',
      'serialNumber': 'FLT12345',
      'vehicleTypeId': 2,
      'vehicleType': 'TRUCK',
      'fuelLevel': 20,
      'distance': 190,
      'sapID': 'TRUCK1559',
      'legacyID': 56874,
      'make': 'Ford',
      'model': 'Ecosport',
      'year': '2014',
      'lastReported': 'Broadway',
      'serviceDue': 100,
      'gpsId': 122,
      'vehicleOwner': 'Jose',
      'noDrivers': 5,
      'chargePerHour': 10,
      'parkingGarage': 'Lincoln street',
      'transmission': 'Manual',
      'numberPlate': 'USHF514',
      'lastTrip': 100,
      'fuelCost': 50,
      'laborCost': 20,
      'odoMeter': 15000,
      'oilLevel': 'green',
      'tierPressureLevel': 'yellow',
      'idealHours': 120,
      'usedHours': 150,
      'renewal': 2019
    }, {
      'id': 6,
      'imagePath': '6',
      'serialNumber': 'FLT12346',
      'vehicleTypeId': 3,
      'vehicleType': 'SEDAN',
      'fuelLevel': 20,
      'distance': 190,
      'sapID': 'SEDAN1559',
      'legacyID': 56874,
      'make': 'Ford',
      'model': 'Ecosport',
      'year': '2014',
      'lastReported': 'Broadway',
      'serviceDue': 100,
      'gpsId': 122,
      'vehicleOwner': 'Jose',
      'noDrivers': 5,
      'chargePerHour': 10,
      'parkingGarage': 'Lincoln street',
      'transmission': 'Manual',
      'numberPlate': 'USHF514',
      'lastTrip': 100,
      'fuelCost': 50,
      'laborCost': 20,
      'odoMeter': 15000,
      'oilLevel': 'green',
      'tierPressureLevel': 'yellow',
      'idealHours': 120,
      'usedHours': 150,
      'renewal': 2019
    }, {
      'id': 7,
      'imagePath': '7',
      'serialNumber': 'FLT12347',
      'vehicleTypeId': 1,
      'vehicleType': 'SUV',
      'fuelLevel': 40,
      'distance': 120,
      'sapID': 'SUV1589',
      'legacyID': 34567,
      'make': 'Ford',
      'model': 'Ecosport',
      'year': '2014',
      'lastReported': 'Broadway',
      'serviceDue': 100,
      'gpsId': 122,
      'vehicleOwner': 'Jose',
      'noDrivers': 5,
      'chargePerHour': 10,
      'parkingGarage': 'Lincoln street',
      'transmission': 'Manual',
      'numberPlate': 'USHF514',
      'lastTrip': 100,
      'fuelCost': 50,
      'laborCost': 20,
      'odoMeter': 15000,
      'oilLevel': 'green',
      'tierPressureLevel': 'yellow',
      'idealHours': 120,
      'usedHours': 150,
      'renewal': 2019
    }, {
      'id': 8,
      'imagePath': '8',
      'serialNumber': 'FLT12348',
      'vehicleTypeId': 2,
      'vehicleType': 'TRUCK',
      'fuelLevel': 20,
      'distance': 190,
      'sapID': 'TRUCK1558',
      'legacyID': 56874,
      'make': 'Ford',
      'model': 'Ecosport',
      'year': '2014',
      'lastReported': 'Broadway',
      'serviceDue': 100,
      'gpsId': 122,
      'vehicleOwner': 'Jose',
      'noDrivers': 5,
      'chargePerHour': 10,
      'parkingGarage': 'Lincoln street',
      'transmission': 'Manual',
      'numberPlate': 'USHF514',
      'lastTrip': 100,
      'fuelCost': 50,
      'laborCost': 20,
      'odoMeter': 15000,
      'oilLevel': 'green',
      'tierPressureLevel': 'yellow',
      'idealHours': 120,
      'usedHours': 150,
      'renewal': 2019
    }, {
      'id': 9,
      'imagePath': '9',
      'serialNumber': 'FLT12349',
      'vehicleTypeId': 3,
      'vehicleType': 'SEDAN',
      'fuelLevel': 20,
      'distance': 190,
      'sapID': 'SEDAN1559',
      'legacyID': 56874,
      'make': 'Ford',
      'model': 'Ecosport',
      'year': '2014',
      'lastReported': 'Broadway',
      'serviceDue': 100,
      'gpsId': 122,
      'vehicleOwner': 'Jose',
      'noDrivers': 5,
      'chargePerHour': 10,
      'parkingGarage': 'Lincoln street',
      'transmission': 'Manual',
      'numberPlate': 'USHF514',
      'lastTrip': 100,
      'fuelCost': 50,
      'laborCost': 20,
      'odoMeter': 15000,
      'oilLevel': 'green',
      'tierPressureLevel': 'yellow',
      'idealHours': 120,
      'usedHours': 150,
      'renewal': 2019
    }];

  constructor() {

  }

  /**
   * This service method has no arguments, It returns all the vehicle filter result
   * @returns {Observable<any>}
   */
  getFilerList() {
    return {subscribe:(callback)=>{
        return callback([{
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
        }]);
      }}

    /*return this.http.get(API.FILTERLIST, {})
      .map((response: Response) => {
        return response.json();
      });*/
  }

  /**
   * This service method has no arguments, It returns all the vehicle list
   * @returns {Observable<any>}
   */
  getVehiclesList() {
    return {subscribe:(callback)=>{
        return callback(this.vehicleList);
      }}

    /*return this.http.get(API.VEHICLELIST, {})
      .map((response: Response) => {
        return response.json();
      });*/
  }

  /**
   * This service method has no arguments, It returns all the vehicle list
   * @returns {Observable<any>}
   */
  getVehicleById(vehicleID) {
    return {subscribe:(callback)=>{
        return callback(this.vehicleList[+vehicleID-1])
      }}

    /*return this.http.get(API.VEHICLEBYID, {id: vehicleID})
      .map((response: Response) => {
        return response.json();
      });*/
  }

}
