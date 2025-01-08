import { AuthService } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  insertPersona(url: string, body: {}) {
    return this.http.post(url, body);
  }

  getPersone(url: string) {
    const token = this.authService.user?.token;
    return this.http.get(`${url}?auth=${token}`);
  }

  deletePersona(url: string, id: string) {
    return this.http.delete(`${url}/${id}.json`);
  }

  patchPersona(url: string, id: string, body: {}) {
    return this.http.patch(`${url}/${id}.json`, body);
  }
}
