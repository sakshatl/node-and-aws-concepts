const { IAMClient, ListUsersCommand } = require('@aws-sdk/client-iam');

const iamClient = new IAMClient();

const params = {
  MaxItems: 5
}

async function main() {
  try {
    const data = await iamClient.send(new ListUsersCommand(params));
    console.log(data && data.Users);
  } catch (err) {
    console.log(err)
  }
}

main();