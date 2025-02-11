const fs = require('fs');

const saveFile = (req, res) => {
    const { fileName, content } = req.body;
    fs.writeFile(`./uploads/${fileName}.md`, content, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('File saved successfully');
        }
    });
}

module.exports = saveFile;