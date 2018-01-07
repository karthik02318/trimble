import {Component, OnInit} from '@angular/core';
import {DealershipService} from '../../services/dealership.service';
import {Ivehicle} from '../../interfaces/vehicle.interface';

@Component({
  selector: 'app-dealership',
  templateUrl: './dealership.component.html',
  styleUrls: ['./dealership.component.css']
})
export class DealershipComponent implements OnInit {
  vehiclesList:Array<Ivehicle>;

  constructor(private dealershipService: DealershipService) {
  }

  ngOnInit() {
    this.dealershipService.getVehiclesList().subscribe(
      vehiclesList => {
        console.log(vehiclesList, 'vehiclesList');
        this.vehiclesList = vehiclesList;
      });
  }

}
