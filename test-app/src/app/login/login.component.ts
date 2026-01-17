import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    animations: [
        trigger('fadeInUp', [
            state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
            transition(':enter', [
                animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ]),
        trigger('floatInput', [
            state('floated', style({ transform: 'translateY(-2px)' })),
            state('normal', style({ transform: 'translateY(0)' })),
            transition('normal <=> floated', animate('0.2s ease-in-out'))
        ])
    ]
})
export class LoginComponent {
    loginForm: FormGroup;
    focusedInput: string | null = null;

    constructor(private fb: FormBuilder, private router: Router) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit() {
        if (this.loginForm.valid) {
            const { email, password } = this.loginForm.value;
            if (email === 'admin@shop.com' && password === 'password') {
                this.router.navigate(['/home']);
            } else {
                alert('Invalid credentials! Try admin@shop.com / password');
            }
        } else {
            this.loginForm.markAllAsTouched();
        }
    }

    onFocus(field: string) {
        this.focusedInput = field;
    }

    onBlur() {
        this.focusedInput = null;
    }
}
