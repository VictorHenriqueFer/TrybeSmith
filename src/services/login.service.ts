import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import jwtUtil from '../utils/jwt.util';
import { Token } from '../types/Token';
import { Login } from '../types/Login';

const verifyLogin = async (login: Login): Promise<ServiceResponse<Token>> => {
  const foundUser = await UserModel.findOne({ where: { username: login.username } });
  if (foundUser === null) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const hashPassword = bcrypt.compareSync(login.password, foundUser.dataValues.password);
  if (!hashPassword) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const { username } = foundUser.dataValues;
  const token = jwtUtil.sign({ username });
  return { status: 'SUCCESSFUL', data: { token } };
};  
export default { verifyLogin };
