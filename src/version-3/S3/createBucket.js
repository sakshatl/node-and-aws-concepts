import { S3Client, CreateBucketCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client();

const bucketParams = {
  bucketName: 'sakshat-bucket',
  bucketACL: 'private'
}

async function main() {
  try {
    const data = await s3Client.send(new CreateBucketCommand({
      Bucket: bucketParams.bucketName,
      ACL: bucketParams.bucketACL
    }));
    console.log('Bucket created:', data);
  } catch (err) {
    console.log(err);
  }
}

main();