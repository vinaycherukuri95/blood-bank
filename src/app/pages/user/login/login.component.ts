import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // <- required
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login( {
       email: this.email,  
       password: this.password
    }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token); // ✅ Store JWT
        this.router.navigate(['/donors']);
      },
      error: () => this.error = 'User name and password invalid'
    });
  }
}
