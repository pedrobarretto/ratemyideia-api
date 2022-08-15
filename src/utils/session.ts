import { Request } from 'express';

export function saveUserId(req: Request, userId: string) {
  req.session.userId = userId;
  req.session.save();
}
