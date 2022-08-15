import { Request } from 'express';

export function saveUserId(req: Request, userId: string) {
  req.session.userId = userId;
  req.session.save();
}

export function clearSession(req: Request) {
  req.session.userId = null;
  req.session.destroy((err) => {
    console.debug(err);
  });
}
