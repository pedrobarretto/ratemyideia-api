import { Router } from 'express';

import { ideiasRoutes } from './ideias.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/ideias/v1', ideiasRoutes);
router.use('/users/v1', usersRoutes);

export { router };
