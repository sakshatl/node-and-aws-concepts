import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const s3Client = new S3Client();

const __dirname = path.resolve();
const absolutePathToImage = path.join(__dirname, './react-logo.png');

const bucketParams = {
  bucketName: 'sakshat-test-bucket',
  bucketACL: 'public-read',
  key: 'react-logo-image.png',
}

async function main() {
  try {
    const fileContents = readFileSync(absolutePathToImage);
    const response = await s3Client.send(new PutObjectCommand({
      Bucket: bucketParams.bucketName,
      ACL: bucketParams.bucketACL,
      Key: bucketParams.key,
      Body: fileContents
    }));

    if(response) {
      console.log(response);
    }

  } catch (err) {
    console.log(err);
  }
}

main();