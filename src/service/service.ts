import axios from 'axios';

const app = axios.create({
  baseURL: `${process.env.AXIOS_BASE_URL}/auth/v1`,
});

export { app };
