import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Mock login: resolves for any email/password combination that meets basic validation.
  login(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password && password.length >= 6) {
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 700);
    });
  }
}
