// Import Component decorator from Angular core library
import { Component } from '@angular/core';
// Import CommonModule for common directives (though not used here, good practice to include)
import { CommonModule } from '@angular/common';
// Import Router service for navigation between pages
import { Router } from '@angular/router';

// Component decorator defines metadata for this component
@Component({
  selector: 'app-planner-dashboard', // HTML tag to use this component: <app-planner-dashboard></app-planner-dashboard>
  standalone: true, // This is a standalone component (Angular 19 feature, no module required)
  imports: [CommonModule], // Import necessary modules for this component
  // Inline template: HTML is defined directly in this file instead of separate .html file
  template: `
    <!-- Main page container: centers content on screen -->
    <div class="page">
      <!-- Dashboard card: white card with welcome message -->
      <div class="card">
        <!-- Page heading -->
        <h1>Planner Dashboard</h1>
        <!-- Welcome message with CSS class "sub" for styling -->
        <p class="sub">Welcome, Planner!</p>
        <!-- Back button: (click) calls back() method to navigate to login page -->
        <button (click)="back()" class="submit">Back to Login</button>
      </div>
    </div>
  `,
  // Inline styles: CSS is defined directly in this file instead of separate .css file
  // Using array format allows multiple style strings if needed
  styles: [`
    /* Main page layout: full viewport height, flexbox for centering, gradient background */
    .page { min-height:100vh; display:flex; align-items:center; justify-content:center;
      background: linear-gradient(180deg,#eef2ff,#f7f9ff); font-family:Inter,Arial,sans-serif; }
    /* Card styling: white background, padding, rounded corners, shadow for depth */
    .card { background:white; padding:28px; border-radius:12px; box-shadow:0 10px 30px rgba(2,6,23,0.08); text-align:center; }
    /* Subtitle text: gray color, margin spacing */
    .sub { color:#6b7280; margin:8px 0 18px; }
    /* Submit button: gradient background matching brand colors, white text, pointer cursor */
    .submit { padding:10px 16px; border-radius:8px; border:none; background: linear-gradient(90deg,#6a11cb,#2575fc); color:white; cursor:pointer; }
  `]
})
export class PlannerDashboardComponent {
  // Constructor: Dependency injection for Router service
  // "private router: Router" makes router available throughout the component
  constructor(private router: Router) {}
  
  // Method to navigate back to login page
  // Uses router.navigate() to change route to '/' (home/login page)
  back() { this.router.navigate(['/']); }
}
