import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  form: FormGroup;
  private authUrl = 'https://apilb.tridevs.net/api/auth/login';

  constructor(private fb: FormBuilder, private http: HttpClient, private toastr: ToastrService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  isInvalid(controlName: string) {
    const c = this.form.get(controlName);
    return !!(c && c.invalid && (c.touched || c.dirty));
  }

  onSubmit() {
    if (this.form.valid) {
      const payload = this.form.value;
      this.http.post<any>(this.authUrl, payload).subscribe({
        next: (res) => {
          this.toastr.success('Connexion réussie', 'Auth');
          if (res && res.token) {
            try { localStorage.setItem('auth_token', res.token); } catch {}
          }
          // navigate to CVs after login
          this.router.navigate(['/cvs']);
        },
        error: (err) => {
          const msg = err?.error?.message || 'Erreur lors de la connexion';
          this.toastr.error(msg, 'Auth Error');
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
