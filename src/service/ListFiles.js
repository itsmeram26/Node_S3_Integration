const fs = require('fs');
const s3 = require('./Connection');

const params = {
    Bucket : ''//Name of the S3 Bucket to be accessed
}

exports.listS3Objects = () => {
    s3.connectAWS().listObjects(params, (err, data)=>{
        if(err){
            console.log(`Error Retrieving Objects from Bucket - ${err}`);
            return;
        }
    
        console.log('Reading Object from bucket');
    
        let listFromS3 = data.Contents;
    
        listFromS3.forEach((obj)=>{
            console.log(obj.Key);
        })
    });
}
