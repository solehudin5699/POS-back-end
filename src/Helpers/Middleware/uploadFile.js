const multer = require("multer");
const path = require("path");
const fs = require("fs");
// const { extname } = require("path");

//Disk for save file
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    const nameFormat = `${Date.now()}-${file.fieldname}${path.extname(
      file.originalname
    )}`;
    cb(null, nameFormat);
  },
});

//Limit filesize
const limits = {
  fileSize: 1 * 1000 * 1000,
};

//Filter for File
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpg|jpeg|gif|png/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  if (extName) {
    cb(null, true);
  } else {
    cb("Error: Image Only");
  }
};

const upload = multer({
  storage,
  limits,
  fileFilter,
});

const uploadController = {
  singleUpload: (req, res, next) => {
    const singleUpload = upload.single("image");
    singleUpload(req, res, (err) => {
      if (err) {
        res.json({
          msg: err,
        });
      } else if (!req.file && !req.body.imageDelete) {
        next();
      } else if (req.file && !req.body.imageDelete) {
        try {
          req.body.product_image = `/images/${req.file.filename}`;
          next();
        } catch (err) {
          res.json({
            msg: err,
          });
        }
      } else {
        try {
          fs.unlinkSync("public" + req.body.imageDelete);
          req.body.product_image = `/images/${req.file.filename}`;
          next();
        } catch (err) {
          res.json({
            msg: err,
          });
        }
      }
    });
  },
};
module.exports = uploadController;
