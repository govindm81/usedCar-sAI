import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'settings',
        loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent)
    },
    {
        path: 'settings/edit-profile',
        loadComponent: () => import('./settings/edit-profile/edit-profile.component').then(m => m.EditProfileComponent)
    },
    {
        path: 'vehicle/:id',
        loadComponent: () => import('./vehicle-detail/vehicle-detail.component').then(m => m.VehicleDetailComponent)
    }
];
