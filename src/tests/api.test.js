const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('./../server');

const api = supertest(app);

test('people are returned as json', async () => {
  await api
    .get('/test')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

afterAll(async () => {
  await mongoose.connection.close();
});
