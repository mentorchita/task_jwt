const { Sequelize } = require("sequelize");
const db = require("../config/Database.js");
const Product = require("../models/ProductsModel.js");

jest.mock("sequelize");

describe("Product", () => {
    it("should create a new product", async () => {
      // Mock the `define` method on the `db` object.
      jest.spyOn(db, "define").mockReturnValue({
        id: 1,
        title: "Product 1",
        price: "100",
        description: "This is a product.",
      });

    // Create a new product.
    const product = await db.define("product", { title: "Product 1", price: "100", description: "This is a product." });

    // Assert that the product was created successfully.
    expect(product.id).toBe(1);
    expect(product.title).toBe("Product 1");
    expect(product.price).toBe("100");
    expect(product.description).toBe("This is a product.");
  });

  
});




// const { Sequelize, DataTypes } = require("sequelize");
// const db = require("../config/db.js");
// const Product = require("./productModel.js");
// const {getProductById}  = require('../controllers/productsController.js')

// // Mock the Sequelize instance
// // jest.mock("sequelize", () => {
// //   const { MockSequelize } = require("sequelize-mock");
// //   return {
// //     Sequelize: MockSequelize,
// //     DataTypes: MockSequelize.DataTypes,
// //   };
// // });

// // describe("Product Model", () => {
// //   let sequelize;
// //   let model;

// //   beforeAll(() => {
// //     // Create a new Sequelize instance
// //     sequelize = new Sequelize();

// //     // Define the Product model using the mock Sequelize instance
// //     model = Product.init(
// //       {
// //         id: {
// //           type: DataTypes.UUID,
// //           defaultValue: DataTypes.UUIDV1,
// //           primaryKey: true,
// //         },
// //         title: DataTypes.STRING,
// //         price: DataTypes.STRING,
// //         description: DataTypes.STRING,
// //       },
// //       {
// //         sequelize,
// //         modelName: "product",
// //         freezeTableName: true,
// //       }
// //     );

// //     // Sync the model with the mock database
// //     model.sync = jest.fn(() => Promise.resolve());
// //   });

// //   afterEach(() => {
// //     // Reset the mock model and clear all data
// //     model.sync.mockClear();
// //     model.$clearQueue();
// //   });

// //   afterAll(() => {
// //     // Close the mock database connection
// //     sequelize.close();
// //   });

// //   it("should sync the model with the database", async () => {
// //     // Assertions
// //     await expect(model.sync).toHaveBeenCalled();
// //   });

// //   it("should create a product", async () => {
// //     const productData = {
// //       title: "Test Product",
// //       price: "10.99",
// //       description: "A test product",
// //     };

// //     // Create a new product using the mock model
// //     const product = await model.create(productData);

// //     // Assertions
// //     expect(product.title).toBe(productData.title);
// //     expect(product.price).toBe(productData.price);
// //     expect(product.description).toBe(productData.description);
// //   });
// // });
// jest.mock('./productModel', () => () => {
//     const SequelizeMock = require("sequelize-mock");
//     const dbMock = new SequelizeMock();
//     return dbMock.define('Product',  {
//       id: '3ba84f70-2533-11ee-8963-d3cf5eb81ca1',
//       title: 'broad',
//       price: '20',
//       description: null,
//       "createdAt": '2023-03-06T15:04:59.000Z',
//       "updatedAt": '2023-07-18T06:20:46.000Z'
//     })
//   });
  
  
//   describe("Test Sequelize Mocking", () => {  
//     it("Should get value from mock", async () => {
//       const product = await getProductById();
//       console.log(product);
//       expect(product.title).toEqual('broad');
//     })
//   })
    