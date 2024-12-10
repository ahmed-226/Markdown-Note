const express = require('express');
const apiRouter = express.Router();
const uploadFile = require('../controllers/upload.controller.js');
const upload = require('../config/multer.js');
const saveFile = require('../controllers/save.controller.js');


apiRouter.post('/upload',upload.single('file'), uploadFile);
apiRouter.post('/save', saveFile);


module.exports = apiRouter;
