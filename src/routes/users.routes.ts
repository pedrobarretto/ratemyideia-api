import { Router, Request, Response } from 'express';

import { authService } from '../service/AuthService';

const usersRoutes = Router();

usersRoutes.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { token, userId } = await authService.login({ email, password });
  console.log('userId: ', userId);
  req.session.userId = userId;
  req.session.save();
  return res.status(200).json({ token });
});

export { usersRoutes };
