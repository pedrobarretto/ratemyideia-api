import { Router } from 'express';

import { ideiasRoutes } from './ideias.routes';

const router = Router();

router.use('/ideias/v1', ideiasRoutes);

export { router };
