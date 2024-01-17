import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import validateProducts from '../middlawares/validateProducts';
import validateProductsPrice from '../middlawares/validateProductsPrice';

const productsRouter = Router();

productsRouter.post(
  '/products',
  validateProducts,
  validateProductsPrice,
  ProductsController.createProduct,
);
productsRouter.get('/products', ProductsController.getProducts);

export default productsRouter;