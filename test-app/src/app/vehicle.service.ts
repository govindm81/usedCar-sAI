import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Vehicle {
    id: number;
    year: number;
    make: string;
    model: string;
    price: number;
    mileage: number;
    carImage: string;
    condition: string;
    fuelType: string;
    transmission: string;
    owner: string; // e.g., "1st Owner"
}

@Injectable({
    providedIn: 'root'
})
export class VehicleService {

    private vehicles: Vehicle[] = [
        {
            id: 1,
            year: 2022,
            make: 'Tata',
            model: 'Nexon EV Max',
            price: 1850000,
            mileage: 15000,
            carImage: 'assets/carimage/nexon.jpeg',
            condition: 'Like New',
            fuelType: 'Electric',
            transmission: 'Automatic',
            owner: '1st Owner'
        },
        {
            id: 2,
            year: 2021,
            make: 'Mahindra',
            model: 'Thar 4x4',
            price: 1575000,
            mileage: 22000,
            carImage: 'assets/carimage/thar.jpeg',
            condition: 'Excellent',
            fuelType: 'Diesel',
            transmission: 'Manual',
            owner: '1st Owner'
        },
        {
            id: 3,
            year: 2020,
            make: 'Maruti Suzuki',
            model: 'Swift ZXi+',
            price: 750000,
            mileage: 35000,
            carImage: 'assets/carimage/swift.jpeg',
            condition: 'Good',
            fuelType: 'Petrol',
            transmission: 'Manual',
            owner: '2nd Owner'
        },
        {
            id: 4,
            year: 2023,
            make: 'Hyundai',
            model: 'Creta SX(O)',
            price: 1920000,
            mileage: 8000,
            carImage: 'assets/carimage/creta.jpeg',
            condition: 'Like New',
            fuelType: 'Diesel',
            transmission: 'Automatic',
            owner: '1st Owner'
        },
        {
            id: 5,
            year: 2021,
            make: 'Kia',
            model: 'Seltos GT Line',
            price: 1780000,
            mileage: 18000,
            carImage: 'assets/carimage/seltos.jpeg',
            condition: 'Excellent',
            fuelType: 'Petrol',
            transmission: 'DCT',
            owner: '1st Owner'
        },
        {
            id: 6,
            year: 2019,
            make: 'Toyota',
            model: 'Fortuner 4x4',
            price: 3250000,
            mileage: 65000,
            carImage: 'assets/carimage/fortu.jpeg',
            condition: 'Good',
            fuelType: 'Diesel',
            transmission: 'Automatic',
            owner: '1st Owner'
        },
        {
            id: 7,
            year: 2022,
            make: 'Tata',
            model: 'Safari Dark Edition',
            price: 2400000,
            mileage: 12000,
            carImage: 'assets/carimage/safari.jpeg',
            condition: 'Excellent',
            fuelType: 'Diesel',
            transmission: 'Automatic',
            owner: '1st Owner'
        },
        {
            id: 8,
            year: 2020,
            make: 'Honda',
            model: 'City ZX',
            price: 1150000,
            mileage: 28000,
            carImage: 'assets/carimage/city.jpeg',
            condition: 'Excellent',
            fuelType: 'Petrol',
            transmission: 'CVT',
            owner: '1st Owner'
        },
        {
            id: 9,
            year: 2021,
            make: 'Mahindra',
            model: 'XUV700 AX7',
            price: 2600000,
            mileage: 19000,
            carImage: 'assets/carimage/xuv.jpeg',
            condition: 'Like New',
            fuelType: 'Diesel',
            transmission: 'Automatic',
            owner: '1st Owner'
        },
        {
            id: 10,
            year: 2018,
            make: 'Volkswagen',
            model: 'Polo GT TSI',
            price: 850000,
            mileage: 42000,
            carImage: 'assets/carimage/polo.jpeg',
            condition: 'Good',
            fuelType: 'Petrol',
            transmission: 'DSG',
            owner: '2nd Owner'
        }
    ];

    constructor() { }

    getVehicles(): Observable<Vehicle[]> {
        return of(this.vehicles);
    }

    getVehicleById(id: number): Observable<Vehicle | undefined> {
        const vehicle = this.vehicles.find(v => v.id === id);
        return of(vehicle);
    }
}
