import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  matricula = '';
  password = '';
  error = '';

  onSubmit(event: Event) {
    event.preventDefault();
    this.login();
  }
  


  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.auth.login(this.matricula, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Credenciales inválidas';
    }
  }
}




