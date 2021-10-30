import { Router } from 'express';

import { amenitiesRoutes } from './amenities.routes';
import { categoriesRoutes } from './categories.routes';
import { authenticateRoutes } from './authenticate.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/amenities", amenitiesRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };