import { Router, Request, Response } from 'express';

import { authService } from '../service/AuthService';

const usersRoutes = Router();

usersRoutes.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const payload = await authService.login({ email, password });
  return res.status(200).json(payload);
});

export { usersRoutes };
