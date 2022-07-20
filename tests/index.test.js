/* eslint-disable no-undef */
const request = require('supertest')
const app = require('../app')

describe('Horoscope App', () => {
  test('GET /  home page', async () => {
    await request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
  })

  test('POST name, gender and DOB to get know your horoscope', async () => {
    const data = {
      name: 'john',
      gender: 'Male',
      DOB: '2022-06-26'
    }
    await request(app)
      .post('/')
      .send(data)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect.stringContaining(response.text)
      })
  })

  test('POST name, gender and DOB when empty to return status code 400', async () => {
    await request(app)
      .post('/')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .then(response => {
        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual({ message: 'Kindly add your details' })
      })
  })
})
