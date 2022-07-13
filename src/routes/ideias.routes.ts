import { Router, Request, Response } from 'express';

import { ideiaApp } from '../apps/IdeiaApp';
import { checkIfIdeiaIdExists } from '../middlewares/IdeiasMiddlewares';

const ideiasRoutes = Router();

ideiasRoutes.post('/', async (req: Request, res: Response) => {
  const { text } = req.body;
  const defaultIdeia = ideiaApp.defaultIdeia();
  const ideia = { ...defaultIdeia, text };
  await ideiaApp.create(ideia);
  return res.status(201).json(ideia);
});

ideiasRoutes.get('/', async (req: Request, res: Response) => {
  const list = await ideiaApp.list();
  return res.status(200).json(list);
});

ideiasRoutes.put(
  '/:id',
  checkIfIdeiaIdExists,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { downvotes, upvotes } = req.body;
    await ideiaApp.manageVotes({ id, downvotes, upvotes });
    return res.sendStatus(204);
  }
);

ideiasRoutes.delete(
  '/:id',
  checkIfIdeiaIdExists,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    await ideiaApp.delete(id);
    return res.sendStatus(204);
  }
);

export { ideiasRoutes };
