import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth: Boolean = false;

  constructor() { }

  login(email: string, password: string): boolean {
    if (email === 'demo' && password === 'demo') {
      this.isAuth = true;
      return true;
    } else {
      this.isAuth = false;
      return false;
    }
  }

  isAuthenticated() {
    return this.isAuth;
  }
}
