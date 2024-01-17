import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';
import loginMock from '../../mocks/login.mock';


chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Verifique se a requisição for inválida retorna um status 401', async function () {
    sinon.stub(UserModel, 'findOne').resolves(null);
    const response = await chai.request(app).post('/login').send({ username: 'invalid', password: 'invalid' });
    expect(response).to.have.status(401);
    expect(response.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });

  it('Verifique se o retorno não for igual a "username" e "password" são obrigatórios retorna um status 400', async function () {
    sinon.stub(UserModel, 'findOne').resolves();
    const response = await chai.request(app).post('/login').send( {username: 'invalid'});
    expect(response).to.have.status(400);
    expect(response.body).to.be.deep.equal({ message: '"username" and "password" are required' });
  });
  it('ao receber um username e uma senha valída, retorna um token', async function () {
    const mockFindReturn = UserModel.build(loginMock.existingUser)
    sinon.stub(UserModel, 'findOne').resolves(mockFindReturn);
    const response = await chai.request(app).post('/login').send(loginMock.validLogin);
    expect(response).to.have.status(200);
    expect(response.body).to.have.key('token');
  });
});
