const axios = require('axios');
const fs = require('fs');

const uploadFile = async (req, res) => {
    console.log(req.file);
    
    try {
        const content = fs.readFileSync(`./uploads/${req.file.filename}`, 'utf-8');
        const response = await axios.post('http://localhost:3000/api/convert', {
            content: content
        });
        return res.send(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal Server Error');
    }
}

module.exports = uploadFile;