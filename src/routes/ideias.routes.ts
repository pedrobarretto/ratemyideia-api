import { Router, Request, Response } from 'express';

import { ideiaApp } from '../apps/IdeiaApp';

const ideiasRoutes = Router();

ideiasRoutes.post('/', (req: Request, res: Response) => {
  const { text } = req.body;
  const defaultIdeia = ideiaApp.defaultIdeia();
  const ideia = { ...defaultIdeia, text };
  ideiaApp.create(ideia);
  return res.status(201).json(ideia);
});

export { ideiasRoutes };
