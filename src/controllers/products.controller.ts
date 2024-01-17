import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function createProduct(req: Request, res: Response) {
  const ServiceResponse = await productsService.createProduct(req.body);
  res.status(mapStatusHTTP(ServiceResponse.status)).json(ServiceResponse.data);
}

async function getProducts(req: Request, res: Response) {
  const ServiceResponse = await productsService.getProducts();
  res.status(mapStatusHTTP(ServiceResponse.status)).json(ServiceResponse.data);
}

export default { createProduct, getProducts };