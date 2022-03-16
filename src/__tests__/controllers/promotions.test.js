const request = require('supertest')
const app = require('../../app.js')
const dataSeed = require('../../db/seed')

const { closeDb } = require("../../db")
const Product = require('../../models/Product.js')

beforeAll(async () => {
    dataSeed.forEach( async value => {
        const product = new Product(value);
        await product.save()
    })
})

afterAll(async () => {
    await closeDb()
})

describe('Get products list', () =>{

    test('With empty filters', async () => {
        const filters = {}
        const response = await request(app)
            .get('/promotions')
            .query(filters);

        expect(response.statusCode).toEqual(201);
        expect(response.type).toEqual('application/json');

        expect.objectContaining({
            discount: false,
            productss: []
        });
    });

    test('With a palindrome word', async () => {
        const filters = { find: 'asdfdsa' }
        const response = await request(app)
            .get('/promotions')
            .query(filters)

        const {discount, products} = response.body;
        expect(discount).toBeTruthy();
        expect(products.length).toBeGreaterThan(1);
    })

    test('Without a palindrome word', async() => {
        const filters = { find: 'fqfwt ikpxov' }
        const response = await request(app)
            .get('/promotions')
            .query(filters);

        const {discount, products} = response.body;

        expect(discount).toBeFalsy();
        expect(products.length).toEqual(1)
    })

    test('With not results', async () => {
        const filters = {
            find: "product not exist"
        }

        const response = await request(app)
            .get('/promotions')
            .query(filters);

        const {discount, products} = response.body;
        expect(discount).toBeFalsy();
        expect(products.length).toEqual(0);
    });
})

describe('Get product', () => {
    test('By palindrome Id ', async() => {
        const filters = { find: 1 }
        const response = await request(app)
            .get('/promotions')
            .query(filters);

        const {discount, products} = response.body;

        expect(discount).toBeTruthy();
        expect(products.length).toEqual(1)
        expect(products.shift()).toMatchObject({
            _id: expect.any(String),
            id: expect.any(Number),
            brand: expect.any(String),
            description: expect.any(String),
            price: expect.any(Number),
        })

    })

    test('By not palindrome Id', async () => {
        const filters = { find: 13 }
        const response = await request(app)
            .get('/promotions')
            .query(filters);

        const {discount, products} = response.body;

        expect(discount).toBeFalsy();
        expect(products.length).toEqual(1)
        expect(products.shift()).toMatchObject({
            _id: expect.any(String),
            id: expect.any(Number),
            brand: expect.any(String),
            description: expect.any(String),
            price: expect.any(String),
        })
    })

    test('With empty id', async () => {
        const filters = { find: '' }
        const response = await request(app)
            .get('/promotions')
            .query(filters);

        const {discount, products} = response.body;
        expect(discount).toBeFalsy();
        expect(products.length).toEqual(0)
    })
})