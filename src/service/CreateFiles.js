const fs = require('fs');
const s3 = require('./Connection');

const file = '';//inlcude filename along with path
const fileName = '';//file gets created with the name provided


exports.uploadFileInS3 = () => {
    fs.readFile(file, (err, data) => {
       if (err) throw err;
       const params = {
           Bucket: '', //Name of the S3 Bucket to be accessed
           Key: fileName,
           Body: JSON.stringify(data, null, 2)
       };
       s3.connectAWS().upload(params, function(s3Err, data) {
           if (s3Err) throw s3Err
           console.log(`File uploaded successfully at ${data.Location}`)
       });
    });
  };