const converToHtml = require('../../controllers/markdown.controller.js');
const { marked } = require('marked');

describe('Markdown Controller', () => {
    it('should convert markdown to HTML', () => {
        const req = { body: { content: '# Hello World' } };
        const res = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        converToHtml(req, res);
        expect(res.send).toHaveBeenCalledWith(marked('# Hello World'));
    });

    it('should handle errors', () => {
        const req = { body: { content: null } };
        const res = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        converToHtml(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Internal Server Error');
    });
});