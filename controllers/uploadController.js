const uploadFile = (req, res) => {
    console.log(req.file);
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }
    res.send(`File uploaded successfully: ${req.file.filename}`);
}

module.exports = uploadFile