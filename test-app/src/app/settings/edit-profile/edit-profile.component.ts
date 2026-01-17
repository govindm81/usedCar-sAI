import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-edit-profile',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    templateUrl: './edit-profile.component.html',
    styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
    profileForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
        this.profileForm = this.fb.group({
            firstName: ['Admin', Validators.required],
            lastName: ['User', Validators.required],
            email: ['admin@shop.com', [Validators.required, Validators.email]],
            phone: ['+91 98765 43210'],
            bio: ['Car enthusiast and collector.']
        });
    }

    onSubmit() {
        if (this.profileForm.valid) {
            console.log('Profile updated:', this.profileForm.value);
            // Simulate API call
            setTimeout(() => {
                this.router.navigate(['/settings']);
            }, 500);
        }
    }
}
