import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealershipComponent } from './dealership.component';
import {DealershipService} from '../../services/dealership.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FilterModule} from '../../module/filter/filter.module';
import {VehiclelistModule} from '../../module/vehiclelist/vehiclelist.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('DealershipComponent', () => {
  let component: DealershipComponent;
  let fixture: ComponentFixture<DealershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:      [ RouterTestingModule,FilterModule,VehiclelistModule,BrowserAnimationsModule ],
      declarations: [ DealershipComponent ],
      providers:[DealershipService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
