import { ConfigService } from './../servizi/config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelli/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signUpUrl: string;
  signInUrl: string;
  isLoggedIn = true;
  isAdmin = true;
  user!: User | null;

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private router: Router
  ) {
    this.signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.configService.firebaseApiKey}`;
    this.signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.configService.firebaseApiKey}`;
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }

  isRoleAdmin() {
    return this.isAdmin;
  }

  // Quando ci logghiamo creiamo un nuovo user
  createUser(email: string, id: string, token: string, expirationDate: Date) {
    this.user = new User(email, id, token, expirationDate);
  }

  signUp(email: string, password: string) {
    return this.http.post(this.signUpUrl, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }

  signIn(email: string, password: string) {
    return this.http.post(this.signInUrl, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }

  logout() {
    this.isLoggedIn = false;
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['/signin']);
  }
}
