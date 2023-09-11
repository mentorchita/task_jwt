const db = require("../config/Database.js");
const productsService = require("../services/productsService.js");
const Product = require( "../models/ProductsModel.js");
const productsController = require("../controllers/productController.js");
const { UUIDV1 } = require("sequelize");

//jest.mock("sequelize");

jest.mock('../models/ProductsModel.js', () => {
  const SequelizeMock = require('sequelize-mock');
  const dbMock = new SequelizeMock();
  const ProductMock = dbMock.define('product');
  ProductMock.$queryInterface.$useHandler((query, queryOptions) => {
    if (query === 'findAll') {
      return {  rows: [ProductMock.build({ id: 1, title: "milk",price:"32", describe: "Product 1" }), ProductMock.build({ id: 2, title: "salt",price:"17", describe: "Product 2" })] };
    } else if (query === 'findOne') {
      return ProductMock.build({ id: queryOptions[0].where.id });
    }
  });
  return ProductMock;
});



describe("getAllProducts", () => {
  it("should return all products", async () => {

    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await productsController.getAllProducts(req, res);
   // expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toBeCalledWith(
      expect.objectContaining({
      //  data: expect.objectContaining({
          rows: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              title: expect.any(String),
              createdAt: expect.any(Date),
              updatedAt: expect.any(Date),
            }),
          ]),
        }),
    //  }),
    );
  });

 
});

describe("getProductById", () => {
  it("should not return  product by Id", async () => {


    
  });
});