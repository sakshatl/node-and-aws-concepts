import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client();

async function main() {
  try {
    const response = await s3Client.send(new ListBucketsCommand({}));
    if(response) {
      console.log(response.Buckets);
    }
  } catch (err) {
    console.log(err);
  }
}

main();
