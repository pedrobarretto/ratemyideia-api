import { AxiosInstance } from 'axios';

import { LoginDto } from '../interfaces/User';
import { app } from './service';

class AuthService {
  service: AxiosInstance;
  constructor() {
    this.service = app;
  }

  async login({ email, password }: LoginDto) {
    const res = await this.service.post('/auth/login', { email, password });
    console.log(res);
  }
}

export const authService = new AuthService();
