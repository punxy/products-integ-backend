const request = require('supertest')
const app = require('../app.js')

describe('Server', () =>{
    test('server run', async() => {
        const response = await request(app)
            .get('/');

        expect(response.statusCode).toEqual(200);
        expect(response.type).toEqual('text/html');
    })
})