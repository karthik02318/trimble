import {Component, Input, OnInit} from '@angular/core';
import {Ifilter} from '../../../interfaces/filter.interface';
import {SelectedFilterComponent} from '../class/selected-filter.class';

@Component({
  selector: 'app-filter-vehicle',
  templateUrl: './filter-vehicle.component.html',
  styleUrls: ['./filter-vehicle.component.css']
})
export class FilterVehicleComponent extends SelectedFilterComponent implements OnInit {
  @Input('filter') filter:Ifilter;
  ngOnInit() {
  }
}
