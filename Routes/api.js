const express = require('express');
const apiRouter = express.Router();
const uploadFile = require('../controllers/upload.controller.js');
const upload = require('../config/multer.js');
const saveFile = require('../controllers/save.controller.js');
const converToHtml = require('../controllers/markdown.controller.js');

apiRouter.post('/upload',upload.single('file'), uploadFile);
apiRouter.post('/save', saveFile);
apiRouter.post('/convert', converToHtml);



module.exports = apiRouter;
