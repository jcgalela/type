import { Routes } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'maintenance',
        pathMatch: 'full',
    },
    {
        path: '',
        component: EmployeesComponent,
        children: [
            {
                path: '',
                loadChildren: './employees/employee/employee.component'
            }
        ]
    }
]