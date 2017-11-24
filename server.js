'use strict';

const express = require('express');
const app = express();
const cloudinary = require('cloudinary');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const multerMiddleware = multer({ dest: 'video/' });

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors());

cloudinary.config({
    cloud_name: 'xxxxxxxxx',
    api_key: 'xxxxxxxxx',
    api_secret: 'xxxxxxxxx'
});

app.post('/upload', multerMiddleware.single('video'), function(req, res) {
  console.log("Request", req.file.path);
  // Upload to Cloudinary
  cloudinary.v2.uploader.upload(req.file.path,
    {
      raw_convert: "google_speech",
      resource_type: "video",
      notification_url: 'https://requestb.in/wh7fktwh'
    },
    function(error, result) {
      if(error) {
        console.log("Error ", error);
        res.json({ error: error });
      } else {
        console.log("Result ", result);
        res.json({ result: result });
      }
    });
});

app.get('/test', (req, res) => {
  res.json("I got transcripts so much mans not sdsds raaaar!");
});

app.listen(3333);
console.log('Listening on localhost:3333');