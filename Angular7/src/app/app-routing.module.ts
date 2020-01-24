import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: 'registration', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingComponent = [LoginComponent, MaintenanceComponent, EmployeeComponent];