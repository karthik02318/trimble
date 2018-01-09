import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclelistComponent } from './vehiclelist.component';
import {FilterVehicleModule} from '../filter/filter-vehicle/filter-vehicle.module';
import {RouterTestingModule} from '@angular/router/testing';
import {PipeModule} from '../../pipe/pipe.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';

describe('VehiclelistComponent', () => {
  let component: VehiclelistComponent;
  let fixture: ComponentFixture<VehiclelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:      [ RouterTestingModule,PipeModule,BrowserAnimationsModule ],
      declarations: [ VehiclelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclelistComponent);
    component = fixture.componentInstance;
    component.vehiclesList= [
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
      }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check filter executing', () => {
    component.filterType =  {
      'filterName': 'TRUCK',
      'filterTypeId': 2,
      'filterColor': 'red'
    };
    fixture.whenStable().then(() => {
      // after something in the component changes, you should detect changes
      fixture.detectChanges();
      let filterVehicleType = fixture.nativeElement.querySelector('.vehicle-type');
      expect(filterVehicleType.textContent).toEqual('SUV');

    })

  });
});
