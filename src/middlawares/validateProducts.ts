import { Request, Response, NextFunction } from 'express';

const validateProducts = (
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response => {
  const { name } = req.body as unknown as { name: string };
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (typeof name !== 'string') return res.status(422).json({ message: '"name" must be a string' });
  if (name.length < 3) {
    return res.status(422)
      .json({ message: '"name" length must be at least 3 characters long' });
  }

  next();
};

export default validateProducts;