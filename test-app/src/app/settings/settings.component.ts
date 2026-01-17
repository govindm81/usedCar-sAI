import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.css'
})
export class SettingsComponent {

    constructor(private router: Router) { }

    logout() {
        // Clear any auth tokens if implemented
        this.router.navigate(['/login']);
    }
}
