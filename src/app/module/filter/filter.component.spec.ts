import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FilterVehicleModule} from './filter-vehicle/filter-vehicle.module';
import {DealershipService} from '../../services/dealership.service';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:      [ RouterTestingModule,FilterVehicleModule ],
      declarations: [ FilterComponent ],
      providers:[DealershipService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    component.filters = [{
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
    }];
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
