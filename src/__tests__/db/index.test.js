const { connect } = require("mongoose");
const { getUri } = require("../../db")

describe('DB Test', () => {
    test('get uri environment dev', async () => {
        const uri = await getUri('dev')
        expect(uri).toContain('mongodb')
    })

    test('get uri environment test', async () => {
        const uri = await getUri('test')
        expect(uri).toContain('mongodb://127.0.0.1')
    })
});