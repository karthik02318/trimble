import { MathcesTypePipe } from './mathces-type.pipe';

describe('MathcesTypePipe', () => {
  it('create an instance', () => {
    const pipe = new MathcesTypePipe();
    expect(pipe).toBeTruthy();
  });
  it('check filter', () => {
    const pipe = new MathcesTypePipe();
    let vehicleList = [
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
      }];
    let vehicleTypeId = 2;
    let filteredArray = pipe.transform(vehicleList,vehicleTypeId)
    expect(filteredArray[0].id).toEqual(vehicleTypeId);  });
});
