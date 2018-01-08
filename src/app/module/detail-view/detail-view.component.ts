import {Component, OnInit} from '@angular/core';
import {DealershipService} from '../../services/dealership.service';
import {ActivatedRoute} from '@angular/router';
import {fadeListAnimation} from '../../animation/fade-list.animation';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
  animations:[fadeListAnimation]
})
export class DetailViewComponent implements OnInit {

  constructor(private dealershipService: DealershipService, private route: ActivatedRoute) {
  }

  vehicle;
  vehicleID: number;
  private sub: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.vehicleID = +params['id'];
      console.log(this.vehicleID, 'this.vehicleID');
      this.dealershipService.getVehicleById(this.vehicleID).subscribe(
        vehicle => {
          this.vehicle = vehicle;
        });
    });

  }

}
