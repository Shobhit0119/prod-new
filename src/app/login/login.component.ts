import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  remember = false;

  showForgotModal = false;
  forgotEmail = '';
  verificationStep = 0; // 0 = not started, 1 = sent, 2 = enter code
  generatedCode = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email === 'admin@prodmaster.com' && this.password === 'admin123') {
      alert('Logged in as Admin');
      this.router.navigate(['/admin-dashboard']);
      return;
    }
    if (this.email === 'planner@prodmaster.com' && this.password === 'planner123') {
      alert('Logged in as Planner');
      this.router.navigate(['/planner-dashboard']);
      return;
    }
    alert('Invalid email or password');
  }

  openForgot() {
    this.showForgotModal = true;
    this.forgotEmail = '';
    this.verificationStep = 0;
    this.generatedCode = '';
  }

  closeForgot() {
    this.showForgotModal = false;
    this.forgotEmail = '';
    this.verificationStep = 0;
    this.generatedCode = '';
  }

  sendResetLink() {
    const e = (this.forgotEmail || '').trim().toLowerCase();
    if (e === 'admin@prodmaster.com' || e === 'planner@prodmaster.com') {
      alert('A reset link has been sent to your email.');
      this.generatedCode = '123456';
      this.verificationStep = 1;
    } else {
      alert('Email not found');
    }
  }

  startVerify() { this.verificationStep = 2; }

  verifyCode(code: string) {
    if (code === this.generatedCode) {
      alert('Password reset verified');
      this.closeForgot();
    } else {
      alert('Incorrect code');
    }
  }
}
