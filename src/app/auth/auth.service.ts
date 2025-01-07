import { ConfigService } from './../servizi/config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string;
  isLoggedIn = true;
  isAdmin = false;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.configService.firebaseApiKey}`;
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }

  isRoleAdmin() {
    return this.isAdmin;
  }

  signUp(body: {}) {
    return this.http.post(this.url, body);
  }
}
