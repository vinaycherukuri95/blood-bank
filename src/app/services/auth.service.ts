import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private base = 'http://192.168.1.7:8080/api/auth';

  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post(`${this.base}/register`, user);
  }

  login(data: { email: string; password: string }) {
    return this.http.post<{ token: string }>(`${this.base}/login`, data)
      .pipe(tap(res => res?.token && localStorage.setItem('token', res.token)));
  }

  getToken(): string | null {
    const t = localStorage.getItem('token');
    return t ? t.trim() : null;
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
