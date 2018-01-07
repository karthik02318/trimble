import {Component, OnInit} from '@angular/core';
import {DealershipService} from '../../services/dealership.service';
import {Ifilter} from '../../interfaces/filter.interface';
import {SelectedFilterComponent} from './class/selected-filter.class';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent extends SelectedFilterComponent implements OnInit {
  public filters: Array<Ifilter> = [];

  constructor(private dealershipService: DealershipService) {
    super();
  }

  ngOnInit() {
    this.dealershipService.getFilerList().subscribe(
      filters => {
        console.log(filters, 'filters');
        this.filters = filters;
      });
  }
}
