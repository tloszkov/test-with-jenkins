// FILEPATH: /home/kiwi/Documents/DevOps/Jenkins/test/server.test.mjs
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.mjs';

chai.use(chaiHttp);
const { expect } = chai;

describe('Express app', () => {
  it('should be up and running', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return hello', (done) => {
    chai.request(app)
      .get('/hello')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return healthcheck', (done) => {
    chai.request(app)
      .get('/healthcheck')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});