import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  submitting = false;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  async onLogin() {
    if (this.form.invalid) return this.form.markAllAsTouched();

    this.submitting = true;
    try {
      await this.auth.login(this.form.value.email, this.form.value.password);
      alert('Login successful!');
      // TODO: navigate to dashboard
    } catch (err: any) {
      alert(err?.message || 'Login failed');
    } finally {
      this.submitting = false;
    }
  }
}
