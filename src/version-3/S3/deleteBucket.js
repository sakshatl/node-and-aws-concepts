import { S3Client, DeleteBucketCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client();

const params = {
  bucketName: 'sakshat-test-bucket',
}

async function main() {
  try {
    const response = await s3Client.send(new DeleteBucketCommand({
      Bucket: params.bucketName
    }));

    if(response) {
      console.log('Bucket deleted successfully:', response);
    }
  } catch (err) {
    console.log(err.message);
  }
}

main();

