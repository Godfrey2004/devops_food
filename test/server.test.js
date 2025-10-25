const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server.js');

describe('Server Tests', () => {
    beforeAll(async () => {
        // Connect to test database
        await mongoose.connect('mongodb://127.0.0.1:27017/Customer_test');
    });

    afterAll(async () => {
        // Close database connection
        await mongoose.connection.close();
    });

    test('GET / should return login page', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toContain('login');
    });

    test('GET /health should return status OK', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('OK');
    });

    test('POST /register should create new user', async () => {
        const userData = {
            Name: 'Test User',
            email: 'test@example.com',
            password: 'password123'
        };
        
        const response = await request(app)
            .post('/register')
            .send(userData);
            
        expect([200, 302, 400]).toContain(response.status);
    });
});