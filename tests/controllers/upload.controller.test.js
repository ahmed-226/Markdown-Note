const uploadFile = require('../../controllers/upload.controller.js');
const axios = require('axios');
const fs = require('fs');

jest.mock('axios');
jest.mock('fs');

describe('Upload Controller', () => {
    it('should upload a file and convert it to HTML', async () => {
        const req = { file: { filename: 'test.md' } };
        const res = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        fs.readFileSync.mockReturnValue('# Hello World');
        axios.post.mockResolvedValue({ data: '<h1>Hello World</h1>' });

        await uploadFile(req, res);
        expect(fs.readFileSync).toHaveBeenCalledWith('./uploads/test.md', 'utf-8');
        expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/convert', { content: '# Hello World' });
        expect(res.send).toHaveBeenCalledWith('<h1>Hello World</h1>');
    });

    it('should handle errors', async () => {
        const req = { file: { filename: 'test.md' } };
        const res = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        fs.readFileSync.mockImplementation(() => {
            throw new Error('Error');
        });

        await uploadFile(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Internal Server Error');
    });
});