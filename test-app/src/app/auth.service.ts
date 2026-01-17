import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // BehaviorSubject to hold the current login state
    private isLoggedInSubject = new BehaviorSubject<boolean>(false);

    // Observable for components to subscribe to
    isLoggedIn$ = this.isLoggedInSubject.asObservable();

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        // Ideally, check localStorage or a token here to persist state on reload
        // For now, simple in-memory state
        if (isPlatformBrowser(this.platformId)) {
            const savedState = localStorage.getItem('isLoggedIn');
            if (savedState === 'true') {
                this.isLoggedInSubject.next(true);
            }
        }
    }

    login() {
        this.isLoggedInSubject.next(true);
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('isLoggedIn', 'true');
        }
    }

    logout() {
        this.isLoggedInSubject.next(false);
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem('isLoggedIn');
        }
    }

    signup() {
        // For this app, signup also logs you in
        this.login();
    }
}
