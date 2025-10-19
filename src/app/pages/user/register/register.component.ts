import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = { username: '', email: '', password: '' };
  message = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  registerUser() {
    this.auth.register(this.user).subscribe({
      next: () => {
        this.message = 'Registration successful!';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => this.message = 'Registration failed.'
    });
  }
}
