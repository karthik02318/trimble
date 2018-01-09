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

  ngOnInit() {
    this.route.params.subscribe(params => {
      let vehicleID:number = +params['id'];
      this.dealershipService.getVehicleById(vehicleID).subscribe(
        vehicle => {
          this.vehicle = vehicle;
        });
    });

  }

}
