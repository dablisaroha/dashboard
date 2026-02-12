import { Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { MIS } from './mis/mis';
import { Configuration } from './configuration/configuration';
import { TopNavbar } from './top-navbar/top-navbar';
import { login } from './login/login';

export const routes: Routes = [
    { path: 'login', component: login },
    {
        path: '',
        component: TopNavbar,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: AdminDashboard },
            {
                path: 'mis', component: MIS,
                // children: [
                //     { path: 'pl', component: MIS }
                // ]
            },
            { path: 'configuration', component: Configuration }
        ]
    },
    { path: '**', component: login }
];
