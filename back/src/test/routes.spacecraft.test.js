const app = require('../index');
const request = require('supertest');
const { spacecraftMock, getSpacecraftById } = require('../util/mocks/spacecraft.mocks');
const { config } = require('../config/variables');

describe('GET Portfolio List /api/v1/spacecraft', () => {
  it('should respond with 200 status code', async () => {
    const response = await request(app)
      .get('/api/v1/spacecraft')
      .send();
    expect(response.statusCode).toBe(200);
  });

  test('should respond with an array', async () => {
    const response = await request(app)
      .get('/api/v1/spacecraft')
      .send();
      console.log(response);
      expect(response._body).toBeInstanceOf(Array);
  });
});

describe('GET Portfolio By Id /api/v1/spacecraft/id', () => {
  test('should respond with 200 status code', async () => {
    const response = await request(app)
      .get(`/api/v1/spacecraft/${getSpacecraftById}`)
      .send();
    expect(response.statusCode).toBe(200);
  });

  test('should respond with an Object', async () => {
    const response = await request(app)
      .get(`/api/v1/spacecraft/${getSpacecraftById}`)
      .send();
    expect(response._body).toBeInstanceOf(Object);
  });
});

describe('POST Spacecraft /api/v1/spacecraft', () => {
  test('should respond with 200 status code', async () => {
    const response = await request(app)
      .post('/api/v1/spacecraft')
      .send(spacecraftMock);
    expect(response.statusCode).toBe(201);
  });
});
