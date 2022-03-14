import request from 'supertest'
import app from '../app.js'
import test from 'ava'


test('get product list', async t => {

    const filters = {}
    const response = await request(app)
        .get('/promotions')
        .query(filters);

    t.is(response.status, 201);
    t.is(response.type, "application/json");

    t.like(response.body, {
        discount: false,
        products: []
    });
})

test('get products with discount', async t => {
    // enviamos un palindrome par activar el descuento
    const filters = { find: 'abba' } 
    const response = await request(app)
        .get('/promotions')
        .query(filters);

    t.true(response.body.discount)
})

test('get product without discount', async t => {
    const filters = { find: 'no es palindrome' }
    const response = await request(app)
        .get('/promotions')
        .query(filters);

    t.false(response.body.discount)
})