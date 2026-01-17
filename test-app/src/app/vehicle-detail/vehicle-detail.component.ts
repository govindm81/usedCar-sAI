import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Vehicle, VehicleService } from '../vehicle.service';

@Component({
    selector: 'app-vehicle-detail',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './vehicle-detail.component.html',
    styleUrl: './vehicle-detail.component.css'
})
export class VehicleDetailComponent implements OnInit {
    vehicle: Vehicle | undefined;

    constructor(
        private route: ActivatedRoute,
        private vehicleService: VehicleService
    ) { }

    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.vehicleService.getVehicleById(id).subscribe(data => {
            this.vehicle = data;
        });
    }

    contactSeller() {
        alert('Thank you for your interest! The seller will contact you shortly.');
    }
}
