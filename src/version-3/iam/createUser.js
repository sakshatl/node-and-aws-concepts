const  {  IAMClient, CreateUserCommand, GetUserCommand } = require('@aws-sdk/client-iam');

const iamClient = new IAMClient();

const params = {
  UserName: 'new-user-test-1234'
}

async function main() {
  try {
    const data = await iamClient.send(new GetUserCommand(params));
    console.log('User already exists', data);
  } catch (err) {
    console.log(err);
  }
}

main();

