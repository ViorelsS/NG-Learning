import { ConfigService } from './../servizi/config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signUpUrl: string;
  signInUrl: string;
  isLoggedIn = true;
  isAdmin = false;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.configService.firebaseApiKey}`;
    this.signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.configService.firebaseApiKey}`;
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }

  isRoleAdmin() {
    return this.isAdmin;
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
}
