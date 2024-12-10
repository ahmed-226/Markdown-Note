const express = require('express');
const apiRouter = express.Router();
const uploadFile = require('../controllers/uploadController.js');
const upload = require('../config/multer.js');


apiRouter.post('/upload',upload.single('file'), uploadFile);


module.exports = apiRouter;
