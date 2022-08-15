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
      .post('/auth/v1/login', { email, password })
      .then((x) => x.data)
      .catch((err) => {
        const { data } = err.response;
        console.error(`[LoginError] >> ${JSON.stringify(data)}`);
        return data;
      });
  }
}

export const authService = new AuthService();
