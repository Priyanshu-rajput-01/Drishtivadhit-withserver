const multer = require('multer');
const filestorage = multer.diskStorage({destination:(req,res,cb)=>{
    cb(null,'../public/uploads')
},
filename:(req,res,cb)=>{
    cb(null,Date.now()+"--"+file.originalname);
},
});
const upload = multer({storage:filestorage});
module.exports = upload;