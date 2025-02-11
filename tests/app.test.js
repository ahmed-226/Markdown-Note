const request = require('supertest');
const express = require('express');
const path = require('path');
const apiRouter = require('../Routes/api.js');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.use('/api', apiRouter);

describe('App', () => {
    it('should respond with 200 for the root route', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });
});

module.exports = app;