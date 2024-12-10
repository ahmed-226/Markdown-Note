const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});



const fileFilter = (req, file, cb) => {
    if (path.extname(file.originalname) === '.md') {
        cb(null, true); 
    } else {
        cb(new Error('Only .md files are allowed!'), false); 
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });


const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

module.exports = upload;
