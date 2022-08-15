import { Router, Request, Response } from 'express';

import { authService } from '../service/AuthService';
import { clearSession, saveUserId } from '../utils/session';

const usersRoutes = Router();

usersRoutes.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const data = await authService.login({ email, password });

  if (data.status) {
    return res
      .status(data.status || 500)
      .json({ error: data.error || 'Internal Server Error' });
  }

  const { userId, token } = data;
  saveUserId(req, userId);

  return res.status(200).json({ token });
});

usersRoutes.post('/logout', async (req: Request, res: Response) => {
  await authService.logout();
  clearSession(req);

  return res.sendStatus(200);
});

export { usersRoutes };
