const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
  NewUserName: 'test-user-1234-updated', // new user name
  UserName: 'test-user-1234' // current user name
}

iam.updateUser(params, function(err, data) {
  if(err) {
    console.log(err);
  }

  console.log(data);
})