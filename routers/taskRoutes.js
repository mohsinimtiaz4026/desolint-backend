const route = require("express").Router();
const multer = require("multer");
// controllers
const taskController = require("../controllers/taskController");

const UPLOAD_FILES_DIR = "./uploads/";
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, UPLOAD_FILES_DIR);
  },
// in case you want to change the names of your files)
  filename(req, file = {}, cb) {
    file.mimetype = "audio/webm";
    // console.log(req)
    const {originalname} = file;
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
    cb(null, `${Date.now()}${fileExtension}`);
  }
});
const upload = multer({storage});

// routes
route.post('/login',taskController.authenticateUser);
route.post('/add-vehicle',upload.array('files', 10),taskController.addVehicle);
route.post('/upload-files',upload.array('files',10),taskController.uploadFiles);
module.exports = route;