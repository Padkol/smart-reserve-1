import { makeAutoObservable } from 'mobx';

interface User {
  id: number;
  name: string;
  email: string;
}

export class AuthState {
  isAuthenticated = false;
  user: User | null = null;
  token: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  login(userData: User, token: string): void {
    this.isAuthenticated = true;
    this.user = userData;
    this.token = token;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.user = null;
    this.token = null;
  }
}
