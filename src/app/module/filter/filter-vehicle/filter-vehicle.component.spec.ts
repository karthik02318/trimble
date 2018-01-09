import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FilterVehicleComponent} from './filter-vehicle.component';

describe('FilterVehicleComponent', () => {
  let component: FilterVehicleComponent;
  let fixture: ComponentFixture<FilterVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterVehicleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterVehicleComponent);
    component = fixture.componentInstance;
    component.filter = {
      'filterName': 'SUV',
      'filterTypeId': 1,
      'filterColor': 'green'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check filter id', () => {
    spyOn(component, 'onFilterSelected');
    let clickElem = fixture.debugElement.nativeElement.querySelector('div');
    clickElem.click();
    fixture.whenStable().then(() => {
      expect(component.onFilterSelected).toHaveBeenCalled();
    });

  });

  it('check filter color', () => {
    let colorElem = fixture.debugElement.nativeElement.querySelector('div');
    expect(colorElem.style['background-color']).toEqual('green');
  });

  it('check filter name', () => {
    let nameElem = fixture.debugElement.nativeElement.querySelector('img');
    expect(nameElem.attributes.title.textContent).toEqual('SUV');
  });
});
