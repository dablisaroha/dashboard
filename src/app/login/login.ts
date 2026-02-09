import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Login } from '../services/login';
import { FloatLabelType } from '@angular/material/form-field';



@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, MatFormFieldModule, FormsModule, MatCardModule, MatInputModule],
  templateUrl: './login.html',
  styleUrl: './login.less',
})
export class login implements OnInit {
  name = '';
  unitName = '';
  contactPerson = '';
  email = '';
  address = '';
  gst = '';

  mobile = '';
  password = '';
  isRegister = false;
  error = '';
  mode: 'login' | 'register' | 'forgot' | 'reset' = 'login';
  token: string = '';
  confirmPassword = '';
  floatLabelType: any = 'never';
  constructor(private loginService: Login, private route: ActivatedRoute, private router: Router, private snack: MatSnackBar) {
    const urlToken = this.route.snapshot.params['token'];
    if (urlToken) {
      this.mode = 'reset';
      this.token = urlToken;
    }
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      if (this.token) {
        this.mode = 'reset';   // automatically switch to reset screen
        console.log('Reset token:', this.token);
      }
    });
    const urlToken = this.route.snapshot.params['token'];
    if (urlToken) {
      this.mode = 'reset';
      this.token = urlToken;
    }
  }
  toggleMode() {
    this.isRegister = !this.isRegister;
    this.error = '';
  }

  login() {
    this.loginService.login(this.mobile, this.password).subscribe({
      next: (res: any) => {
        console.log('Login response:', res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.user.role);
        localStorage.setItem('userId', res.user.id);
        localStorage.setItem('adminId', res.user.created_by);
        if (res.user.role === 'SUPERADMIN') {
          this.router.navigate(['/manage-admin']);
        } else if (res.user.role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/inspection-form']);
        }
      },
      error: err => {
        // this.snack.open(
        //   err.error.message || 'Login failed. Please try again.',
        //   'Close',
        //   {
        //     duration: 3000,
        //     panelClass: ['error-snackbar']
        //   }
        // );
      }
    });
  }

  register() {
    const payload = {
      name: this.name,
      unitName: this.unitName,
      mobile: this.mobile,
      email: this.email,
      address: this.address,
      password: this.password
    };
    this.loginService.register(payload).subscribe({
      next: () => {
        this.snack.open(
          'Registration successful. Please login.',
          'Close',
          {
            duration: 3000,
            panelClass: ['success-snackbar']
          }
        );
        this.toggleMode();
      },
      error: err => {
        this.snack.open(
          err.error.message || 'Registration failed. Please try again.',
          'Ok',
          {
            duration: 2000,
            panelClass: ['error-snackbar']
          }
        );
      }
    });
  }

  sendResetLink() {
    this.loginService.sendOtp(this.email)
      .subscribe({
        next: () => {
          this.snack.open(
            'Reset link sent successfully.',
            'Close',
            {
              duration: 3000,
              panelClass: ['success-snackbar']
            }
          );
        },
        error: (err: any) => {
          this.snack.open(
            err.error.message || 'Failed to send reset link.',
            'Close',
            {
              duration: 3000,
              panelClass: ['error-snackbar']
            }
          );
        }
      });
  }
  resetPassword() {
    this.loginService.verifyOtp(this.token, this.password, this.confirmPassword).subscribe({
      next: () => {
        this.password = '';
        this.confirmPassword = '';
        this.mode = 'login';
        this.snack.open(
          "Password updated successfully.",
          'Close',
          {
            duration: 3000,
            panelClass: ['success-snackbar']
          }
        );
      }
    });
  }
}