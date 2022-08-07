import { AxiosInstance } from 'axios';

import { LoginPayload } from '../interfaces/Auth';
import { LoginDto } from '../interfaces/User';
import { app } from './service';

class AuthService {
  service: AxiosInstance;
  constructor() {
    this.service = app;
  }

  async login({ email, password }: LoginDto): Promise<LoginPayload> {
    const res = await this.service.post('/auth/login', { email, password });
    return res.data;
  }
}

export const authService = new AuthService();
