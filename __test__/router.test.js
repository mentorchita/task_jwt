import express from 'express';
import request from 'supertest';
import router from '../routes/userRoutes.js'; // Adjust the import path to your router file

// Mock the functions and middleware you're using
jest.mock('../controllers/Users.js', () => ({
  getUsers: jest.fn(),
  Register: jest.fn(),
  Login: jest.fn(),
  Logout: jest.fn(),
}));

jest.mock('../middleware/VerifyToken.js', () => ({
  verifyToken: jest.fn(),
}));

jest.mock('../controllers/RefreshToken.js', () => ({
  refreshToken: jest.fn(),
}));

const app = express();
app.use(express.json());
app.use(router);

describe('User Routes', () => {
  afterEach(() => {
    // Clear all mock function calls after each test
    jest.clearAllMocks();
  });

  it('should handle GET /users', async () => {
    await request(app).get('/users').expect(200);

    // You can add additional assertions here if needed
    expect(verifyToken).toHaveBeenCalled();
    expect(getUsers).toHaveBeenCalled();
  });

  it('should handle POST /users', async () => {
    await request(app).post('/users').expect(200);

    // You can add additional assertions here if needed
    expect(Register).toHaveBeenCalled();
  });

  it('should handle POST /login', async () => {
    await request(app).post('/login').expect(200);

    // You can add additional assertions here if needed
    expect(Login).toHaveBeenCalled();
  });

  it('should handle GET /token', async () => {
    await request(app).get('/token').expect(200);

    // You can add additional assertions here if needed
    expect(refreshToken).toHaveBeenCalled();
  });

  it('should handle DELETE /logout', async () => {
    await request(app).delete('/logout').expect(200);

    // You can add additional assertions here if needed
    expect(Logout).toHaveBeenCalled();
  });
});
