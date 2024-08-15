const request = require('supertest');
const express = require('express');
const routes = require('../routes');

const app = express();
app.use('/api', routes);

describe('GET /holidays', () => {
  it('should fetch holidays for a given country and year', async () => {
    const res = await request(app).get('/api/holidays?country=PAK&year=2024');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Object);
  });

  it('should return 400 if country or year is missing', async () => {
    const res = await request(app).get('/api/holidays?year=2024');
    expect(res.statusCode).toEqual(400);
  });
});

describe('GET /countries', () => {
  it('should fetch the list of supported countries', async () => {
    const res = await request(app).get('/api/countries');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Object);
  });
});
