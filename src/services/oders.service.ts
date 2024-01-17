import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Order } from '../types/Order';

const getId = async (): Promise<ServiceResponse<Order[]>> => {
  const orderSequelize = await OrderModel.findAll({
    include: {
      model: ProductModel,
      as: 'productIds',
    },
  });
  const orders = orderSequelize.map((order) => ({
    userId: order.dataValues.userId,
    id: order.dataValues.id,
    productIds: (order.dataValues.productIds as any []).map((products) => products.id),
  }));
  console.log(orders);
  return { status: 'SUCCESSFUL', data: orders };
};
    
export default { getId };