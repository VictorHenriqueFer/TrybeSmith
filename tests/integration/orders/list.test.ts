import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('ao fazer a requisição deve retornar os dados e o 201', async function () {
    const mockFindReturn = ProductModel.build(productMock.productsMock as any)
    sinon.stub(ProductModel, 'findAll').resolves(mockFindReturn as any);
    const response = await chai.request(app).get('/products');
    expect(response).to.have.status(200);
    expect(response.body).to.be.deep.equal(productMock.productsMock);
  }
  );

});
