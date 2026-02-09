import { Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { MIS } from './mis/mis';
import { Configuration } from './configuration/configuration';
import { TopNavbar } from './top-navbar/top-navbar';

export const routes: Routes = [
    {
        path: '',
        component: TopNavbar,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: AdminDashboard },
            { path: 'mis', component: MIS },
            { path: 'configuration', component: Configuration }
        ]
    }
];
