const { marked } = require('marked');

const converToHtml = (req, res) => {
    const { content } = req.body;
    try {
        if (!content) {
            throw new Error('Content is null or undefined');
        }
        const html = marked(content);
        res.send(html);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = converToHtml;