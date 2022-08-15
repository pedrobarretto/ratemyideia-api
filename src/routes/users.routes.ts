import { Router, Request, Response } from 'express';

import { authService } from '../service/AuthService';
import { saveUserId } from '../utils/session';

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

export { usersRoutes };
