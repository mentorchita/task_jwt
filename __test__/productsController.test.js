import { getAllProducts } from '../controllers/productsController'; // Import the specific function you want to test

import { SequelizeMock } from 'sequelize-mock'; // Import the SequelizeMock class

describe("getAllProducts", () => {
  it("should return all products", async () => {
    const dbMock = new SequelizeMock(); // Create a new SequelizeMock instance
    const ProductMock = dbMock.define('product'); // Define a mocked 'product' model

    // Mock the 'findAll' method to return sample data
    ProductMock.$queryInterface.$useHandler((query) => {
      if (query === 'findAll') {
        return {
          rows: [
            ProductMock.build({ id: 1, title: "milk", price: "32", describe: "Product 1" }),
            ProductMock.build({ id: 2, title: "salt", price: "17", describe: "Product 2" })
          ]
        };
      }
    });

    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await getAllProducts(req, res);

    expect(res.json).toBeCalledWith(
      expect.objectContaining({
        rows: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date),
          }),
        ]),
      })
    );
  });

  
});
