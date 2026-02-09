import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environment/env';

@Injectable({ providedIn: 'root' })
export class Login {
  private api = `${environment.API_URL}/auth`;

  constructor(private http: HttpClient, private router: Router) { }

  login(mobile: string, password: string) {
    this.router.navigate(['/dashboard']);
    return this.http.post(`${this.api}/login`, { mobile, password });
  }

  saveSession(res: any) {
    localStorage.setItem('token', res.token);
    localStorage.setItem('role', res.user.role);
    localStorage.setItem('user_id', res.user.id);
    localStorage.setItem('adminId', res.user.created_by);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  get role() {
    return localStorage.getItem('role');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  register(payload: any) {
    return this.http.post(`${this.api}/register`, payload);
  }

  sendOtp(email: string) {
    return this.http.post(`${this.api}/forgotPassword`, { email: email });
  }

  verifyOtp(token: string, password:string, newPassword: string) {
    return this.http.post(`${this.api}/resetPassword`, {
      token: token,
      password: password,
      newPassword: newPassword
    });
  }

}