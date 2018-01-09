import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import {DetailViewModule} from '../../module/detail-view/detail-view.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DealershipService} from '../../services/dealership.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:      [RouterTestingModule,DetailViewModule,BrowserAnimationsModule],
        declarations: [ DetailComponent ],
      providers:[DealershipService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
