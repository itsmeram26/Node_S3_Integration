const AWS = require('aws-sdk');

exports.connectAWS = () => {
    return new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  })
}
