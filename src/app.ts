import express from 'express';
import productsRouter from './routers/product.route';
import ordersRouter from './routers/orders.route';
import loginRouter from './routers/login.route';

const app = express();

app.use(express.json());

app.use(productsRouter);

app.use('/orders', ordersRouter);

app.use('/login', loginRouter);

export default app;
