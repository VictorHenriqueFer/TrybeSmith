import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const ordersRouter = Router();

ordersRouter.get('/', OrdersController.getOrder);

export default ordersRouter;