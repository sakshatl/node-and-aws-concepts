import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client();

const bucketParams = {
  bucketName: 'sakshat-test-bucket',
  key: 'react-logo-image.png'
}

async function main() {
  try {
    const response = await s3Client.send(new DeleteObjectCommand({
      Bucket: bucketParams.bucketName,
      Key: bucketParams.key,
    }));

    if(response) {
      console.log("Success:", response);
    }
  } catch (err) {
    console.log("Error:", err.message)
  }
}

main();