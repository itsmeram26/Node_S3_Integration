const listFilesS3 = require('./src/service/ListFiles');
const createFilesS3 = require('./src/service/CreateFiles');
const deleteFileS3 = require('./src/service/DeleteFile');

createFilesS3.uploadFileInS3();

/* To list Objects in AWS S3
listFilesS3.listS3Objects(); */

/* To delete a file from AWS S3
deleteFileS3.deleteObjectFromS3(); */


