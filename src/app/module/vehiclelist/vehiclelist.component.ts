import {Component, Input, OnInit} from '@angular/core';
import {Ivehicle} from '../../interfaces/vehicle.interface';
import {Ifilter} from '../../interfaces/filter.interface';
import {Router} from '@angular/router';
import {fadeListAnimation} from '../../animation/fade-list.animation';

@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrls: ['./vehiclelist.component.css'],
  animations:[fadeListAnimation]
})
export class VehiclelistComponent implements OnInit {
  @Input() vehiclesList: Array<Ivehicle>;
  @Input() filterType: Ifilter;

  constructor(private router:Router) {
  }

  ngOnChanges(data) {
    console.log(data);
  }
  goToVehicleDetails(id) {
    this.router.navigate(['/detail', id]);
  }
  ngOnInit() {
  }

}
