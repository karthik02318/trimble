import { EventEmitter, Output} from '@angular/core';
import {Ifilter} from '../../../interfaces/filter.interface';

/**
 * This class is extended with filter since the output is passed in nested
 */
export class SelectedFilterComponent {
  @Output() selectedFilter: EventEmitter<Ifilter> = new EventEmitter<Ifilter>();
  onFilterSelected(data:Ifilter){
    this.selectedFilter.emit(data);
  }
}
