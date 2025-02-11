const saveFile = require('../../controllers/save.controller.js');
const fs = require('fs');

jest.mock('fs');

describe('Save Controller', () => {
    it('should save a file', (done) => {
        const req = { body: { fileName: 'test', content: 'Hello World' } };
        const res = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        fs.writeFile.mockImplementation((path, data, callback) => {
            callback(null); // Simulate successful write
        });

        saveFile(req, res);
        process.nextTick(() => {
            expect(fs.writeFile).toHaveBeenCalledWith('./uploads/test.md', 'Hello World', expect.any(Function));
            expect(res.send).toHaveBeenCalledWith('File saved successfully');
            done();
        });
    });

    it('should handle errors', (done) => {
        const req = { body: { fileName: 'test', content: 'Hello World' } };
        const res = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        fs.writeFile.mockImplementation((path, data, callback) => {
            callback(new Error('Error')); // Simulate write error
        });

        saveFile(req, res);
        process.nextTick(() => {
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith('Internal Server Error');
            done();
        });
    });
});