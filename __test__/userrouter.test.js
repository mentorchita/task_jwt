const express = require('express');
const supertest = require('supertest');
const router = require('../routes/userRoutes.js');
const {
  getUsers,
  Register,
  Login,
  Logout
} = require('../controllers/Users.js');
const {
  verifyToken
} = require('../middleware/VerifyToken.js');
const {
  refreshToken
} = require('../controllers/RefreshToken.js');

// Create a mock Express app for testing
const app = express();
app.use(express.json());
app.use('/', router);

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

describe('Users Routes', () => {
  it('should call getUsers controller when GET /users is called with a valid token', async () => {
    getUsers.mockImplementation((req, res) => {
      res.json([]);
    });

    verifyToken.mockImplementation((req, res, next) => {
      // Mocking the token verification middleware
      next();
    });

    const response = await supertest(app).get('/users');

    expect(response.status).toBe(200);
    expect(getUsers).toHaveBeenCalledTimes(1);
  });

  it('should call Register controller when POST /users is called', async () => {
    Register.mockImplementation((req, res) => {
      res.status(201).json({ message: 'User created' });
    });

    const userData = { /* create your mock user data here */ };

    const response = await supertest(app)
      .post('/users')
      .send(userData);

    expect(response.status).toBe(201);
    expect(Register).toHaveBeenCalledTimes(1);
  });

  

  // Add similar tests for other routes (Login, refreshToken, Logout, etc.)
});
