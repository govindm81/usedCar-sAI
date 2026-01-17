import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Vehicle, VehicleService } from '../vehicle.service';
import { AuthService } from '../auth.service';

interface AppNotification {
    id: number;
    message: string;
    time: string;
    read: boolean;
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    showNotifications = false;
    vehicles: Vehicle[] = [];

    notifications: AppNotification[] = [
        { id: 1, message: 'Price drop on Tata Nexon EV!', time: '2 mins ago', read: false },
        { id: 2, message: 'New Mahindra Thar added.', time: '1 hour ago', read: false },
        { id: 3, message: 'Your favorite Swift sold.', time: '5 hours ago', read: true },
        { id: 4, message: 'Welcome to AutoDeal Premium.', time: '1 day ago', read: true }
    ];

    constructor(private vehicleService: VehicleService, public authService: AuthService) { }

    ngOnInit() {
        this.vehicleService.getVehicles().subscribe(data => {
            this.vehicles = data;
        });
    }

    toggleNotifications() {
        this.showNotifications = !this.showNotifications;
    }

    markAllAsRead() {
        this.notifications.forEach(n => n.read = true);
    }

    get unreadCount(): number {
        return this.notifications.filter(n => !n.read).length;
    }

    logout() {
        this.authService.logout();
    }
}
