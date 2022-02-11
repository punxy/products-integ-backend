const request = require("supertest")
const { app } = require("../server")
const { Builder } = require("../builders/product-builder.js")
const { store } = require("../services/product-service")
const { connect, getUri } = require("../db")

jest.mock('../services/product-service.js')

beforeEach(() => {
  store.mockReset()
})

beforeAll(async () => {
  const uri = await getUri()
  await connect({ uri })
})

describe("POST /products", () => {
	test("should store a new product", async () => {
		const product = Builder.product()

		const response = await request(app)
			.post("/products")
			.send(product)
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(201)

		const { _id, ...productStored } = response.body

		expect(productStored).toEqual(product)
  	expect(_id).toBeTruthy()
	})

	test("should execute store function", async () => {
		const product = Builder.product()

    await request(app)
      .post("/products")
      .send(product)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)

		expect(store).toHaveBeenCalledWith(product)
  })
})