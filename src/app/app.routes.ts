import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PlannerDashboardComponent } from './planner-dashboard/planner-dashboard.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'planner-dashboard', component: PlannerDashboardComponent },
  { path: '**', redirectTo: '' }
];
