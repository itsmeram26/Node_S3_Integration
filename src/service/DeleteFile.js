const fs = require('fs');
const s3 = require('./Connection');

const params = {
    Bucket : '',//Name of the S3 Bucket to be accessed
    Key : '' //Name of the file to be deleted
}

exports.deleteObjectFromS3 = () => {
    s3.connectAWS().deleteObject(params, (err, data)=>{
        if(err){
            console.log(`Error Deleting Objects from Bucket - ${err}`);
            return;
        }
    
        console.log(`Succesfully Deleted Object :: ${params.Key} from bucket :: ${params.Bucket}`);
    });
}