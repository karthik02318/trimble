import {Component, Input, OnInit} from '@angular/core';
import {Ivehicle} from '../../interfaces/vehicle.interface';

@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrls: ['./vehiclelist.component.css']
})
export class VehiclelistComponent implements OnInit {
  @Input() vehiclesList: Array<Ivehicle>;
  @Input() filterType: number;

  constructor() {
  }

  ngOnInit() {
  }

}
