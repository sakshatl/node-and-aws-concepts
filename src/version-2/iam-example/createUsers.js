const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
  UserName: 'test-user-1234'
}

// createUser function takes in 'params' and a callback function
iam.createUser(params, function(err, data) {
  if(err) {
    console.log(err);
  }

  console.log(data);
})