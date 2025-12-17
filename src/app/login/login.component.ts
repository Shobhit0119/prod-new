import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  rememberMe = false;

  onLogin() {
    if (this.email && this.password) {
      alert('Login successful! Email: ' + this.email);
    } else {
      alert('Please fill in all fields');
    }
  }
}
