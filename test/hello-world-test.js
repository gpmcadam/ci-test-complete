const request = require('supertest');

const app = require('../index');

describe('hello world', () => {
    it('says hello world', done => {
        request(app)
            .get('/')
            .expect(200, 'hello world', done);
    });
});
