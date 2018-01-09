import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailViewComponent} from './detail-view.component';
import {DealershipService} from '../../services/dealership.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';

describe('DetailViewComponent', () => {
  let component: DetailViewComponent;
  let fixture: ComponentFixture<DetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DetailViewComponent],
      providers: [DealershipService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('Check vehicle data with serial number', () => {
    component.vehicle = {
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
    };
    component.ngOnInit();
    fixture.whenStable().then(() => {
      // after something in the component changes, you should detect changes
      fixture.detectChanges();
      let filterVehicleType = fixture.nativeElement.querySelector('.serial-number');
      expect(filterVehicleType.textContent).toEqual('FLT12341');

    });
  });
});
