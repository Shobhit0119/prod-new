import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planner-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <div class="card">
        <h1>Planner Dashboard</h1>
        <p class="sub">Welcome, Planner!</p>
        <button (click)="back()" class="submit">Back to Login</button>
      </div>
    </div>
  `,
  styles: [`
    .page { min-height:100vh; display:flex; align-items:center; justify-content:center;
      background: linear-gradient(180deg,#eef2ff,#f7f9ff); font-family:Inter,Arial,sans-serif; }
    .card { background:white; padding:28px; border-radius:12px; box-shadow:0 10px 30px rgba(2,6,23,0.08); text-align:center; }
    .sub { color:#6b7280; margin:8px 0 18px; }
    .submit { padding:10px 16px; border-radius:8px; border:none; background: linear-gradient(90deg,#6a11cb,#2575fc); color:white; cursor:pointer; }
  `]
})
export class PlannerDashboardComponent {
  constructor(private router: Router) {}
  back() { this.router.navigate(['/']); }
}
