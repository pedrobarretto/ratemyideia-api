import { AxiosInstance } from 'axios';

import { ErrorPayload, LoginPayload } from '../interfaces/Auth';
import { LoginDto } from '../interfaces/User';
import { app } from './service';

interface LoginPayloadWithError extends LoginPayload, ErrorPayload {}

class AuthService {
  service: AxiosInstance;
  constructor() {
    this.service = app;
  }

  async login({ email, password }: LoginDto): Promise<LoginPayloadWithError> {
    return this.service
      .post('/login', { email, password })
      .then((x) => x.data)
      .catch((err) => {
        const { data } = err.response;
        console.error(`[LoginError] >> ${JSON.stringify(data)}`);
        return data;
      });
  }

  async logout() {
    await this.service.post('/logout');
  }
}

export const authService = new AuthService();
