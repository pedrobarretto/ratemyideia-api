import { NextFunction, Response, Request } from 'express';

import { RateMyIdeiaModel } from '../database/Ideias/ideias.model';
import { isUUID } from '../utils/validations';

export async function checkIfIdeiaIdExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'must-provide-id', status: 400 });
  }

  if (!isUUID(id)) {
    return res.status(400).json({ error: 'invalid-id', status: 400 });
  }

  console.debug(
    `[checkIfIdeiaIdExists] >> Checking if ideia with id ${id} exists`
  );
  const ideia = await RateMyIdeiaModel.find({ id });
  if (ideia.length === 0) {
    console.debug('[checkIfIdeiaIdExists] >> Ideia not found');
    return res.status(400).json({ error: 'not-found', status: 400 });
  }

  return next();
}
