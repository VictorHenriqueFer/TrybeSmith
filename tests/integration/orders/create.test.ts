import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('ao criar um produto com sucesso deve retornar 201', async function () {
    const mockFindReturn = ProductModel.build(productMock.productMock)
    sinon.stub(ProductModel, 'create').resolves(mockFindReturn);
    const response = await chai.request(app).post('/products').send(productMock.newProductMock);
    expect(response).to.have.status(201);
    expect(response.body).to.be.deep.equal(productMock.productMock);
  });
});
