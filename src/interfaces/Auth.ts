export interface LoginPayload {
  userId: string;
  token: string;
}

export interface ErrorPayload {
  error: string;
  status: number;
}
