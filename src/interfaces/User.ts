import { Roles } from './Roles';

export interface User {
  name: string;
  lastName: string;
  email: string;
  totalIdeias: number;
  role: Roles;
  id: string;
}

export interface InternUser extends User {
  password: string;
}

export interface LoginDto {
  email: string;
  password: string;
}
