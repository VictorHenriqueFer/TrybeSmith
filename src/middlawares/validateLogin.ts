import { Request, Response, NextFunction } from 'express';

const validateLogin = (
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response => {
  const { username, password } = req.body as unknown as { username: string, password: string };
  if (!username) {
    return res.status(400)
      .json({ message: '"username" and "password" are required' });
  }
  if (!password) {
    return res.status(400)
      .json({ message: '"username" and "password" are required' });
  }
  
  next();
};

export default validateLogin;