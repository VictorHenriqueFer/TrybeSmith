import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

const createProduct = async (product: Product): Promise<ServiceResponse<Product>> => {
  const createdProduct = await ProductModel.create(product);
  const { id, name, price } = createdProduct.get();
  return { status: 'CREATED', data: { id, name, price } };
};

const getProducts = async (): Promise<ServiceResponse<Product[]>> => {
  const productSequelize = await ProductModel.findAll();
  const products = productSequelize.map((product) => product.dataValues);
  return { status: 'SUCCESSFUL', data: products };
};

export default { createProduct, getProducts };