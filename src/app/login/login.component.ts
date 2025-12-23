// Import Component decorator from Angular core library
import { Component } from '@angular/core';
// Import CommonModule for common directives like *ngIf, *ngFor
import { CommonModule } from '@angular/common';
// Import FormsModule for template-driven forms (ngModel)
import { FormsModule } from '@angular/forms';
// Import Router service for navigation between pages
import { Router } from '@angular/router';

// Component decorator defines metadata for this component
@Component({
  selector: 'app-login', // HTML tag to use this component: <app-login></app-login>
  standalone: true, // This is a standalone component (Angular 19 feature, no module required)
  imports: [CommonModule, FormsModule], // Import necessary modules for this component
  templateUrl: './login.component.html', // Path to the HTML template file
  styleUrls: ['./login.component.css'] // Path to the CSS styles file
})
export class LoginComponent {
  // Properties bound to form inputs via ngModel (two-way binding)
  email = ''; // Stores the email entered by user
  password = ''; // Stores the password entered by user
  remember = false; // Stores the "Remember me" checkbox state

  // Properties for forgot password modal functionality
  showForgotModal = false; // Controls visibility of forgot password modal
  forgotEmail = ''; // Stores email entered in forgot password modal
  verificationStep = 0; // Tracks which step of password reset: 0 = not started, 1 = sent, 2 = enter code
  generatedCode = ''; // Stores the verification code (simulated)

  // Constructor: Dependency injection for Router service
  constructor(private router: Router) {}

  // Method called when user submits the login form
  onLogin() {
    // Check if credentials match admin account
    if (this.email === 'admin@prodmaster.com' && this.password === 'admin123') {
      alert('Logged in as Admin'); // Show success message
      this.router.navigate(['/admin-dashboard']); // Navigate to admin dashboard page
      return; // Exit the method
    }
    // Check if credentials match planner account
    if (this.email === 'planner@prodmaster.com' && this.password === 'planner123') {
      alert('Logged in as Planner'); // Show success message
      this.router.navigate(['/planner-dashboard']); // Navigate to planner dashboard page
      return; // Exit the method
    }
    // If no credentials match, show error message
    alert('Invalid email or password');
  }

  // Method to open the forgot password modal
  openForgot() {
    this.showForgotModal = true; // Make modal visible
    this.forgotEmail = ''; // Clear any previous email
    this.verificationStep = 0; // Reset to first step
    this.generatedCode = ''; // Clear any previous code
  }

  // Method to close the forgot password modal
  closeForgot() {
    this.showForgotModal = false; // Hide modal
    this.forgotEmail = ''; // Clear email input
    this.verificationStep = 0; // Reset to first step
    this.generatedCode = ''; // Clear verification code
  }

  // Method to send reset link (simulated)
  sendResetLink() {
    // Trim whitespace and convert email to lowercase
    const e = (this.forgotEmail || '').trim().toLowerCase();
    // Check if email exists in our system (only these two emails are valid)
    if (e === 'admin@prodmaster.com' || e === 'planner@prodmaster.com') {
      alert('A reset link has been sent to your email.'); // Show success message
      this.generatedCode = '123456'; // Generate a verification code (hardcoded for demo)
      this.verificationStep = 1; // Move to next step (link sent)
    } else {
      alert('Email not found'); // Show error if email doesn't exist
    }
  }

  // Method to move to verification code entry step
  startVerify() { 
    this.verificationStep = 2; // Move to step 2 (enter verification code)
  }

  // Method to verify the code entered by user
  verifyCode(code: string) {
    // Check if entered code matches the generated code
    if (code === this.generatedCode) {
      alert('Password reset verified'); // Show success message
      this.closeForgot(); // Close the modal
    } else {
      alert('Incorrect code'); // Show error if code doesn't match
    }
  }
}
