export interface User {
  name: string;
  lastName: string;
  email: string;
  totalIdeias: number;
}

export interface InternUser extends User {
  password: string;
}
