import { Routes } from '@angular/router';
import { DonorFormComponent } from './pages/donors/donor-form/donor-form.component';
import { DonorListComponent } from './pages/donors/donor-list/donor-list.component';
import { AppointmentFormComponent } from './pages/appointments/appointment-form/appointment-form.component';
import { AppointmentListComponent } from './pages/appointments/appointment-list/appointment-list.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'donors', component: DonorListComponent },
  { path: 'donor', component: DonorFormComponent },
  { path: 'donor/:id', component: DonorFormComponent },   
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'appointments/new', component: AppointmentFormComponent }
];

