import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import odersService from '../services/oders.service';

async function getOrder(req: Request, res: Response) {
  const ServiceResponse = await odersService.getId();
  res.status(mapStatusHTTP(ServiceResponse.status)).json(ServiceResponse.data);
}

export default { getOrder };