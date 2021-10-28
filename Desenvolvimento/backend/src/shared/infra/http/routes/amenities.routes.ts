import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateAmenitieController } from '../../../../modules/houses/useCases/createAmenitie/CreateAmenitieController';

const amenitiesRoutes = Router();

const createAmenitieController = new CreateAmenitieController();

amenitiesRoutes.use(ensureAuthenticated);
amenitiesRoutes.post("/", createAmenitieController.handle);

export { amenitiesRoutes };