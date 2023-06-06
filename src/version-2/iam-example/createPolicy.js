const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const ADMIN_POLICY_OBJ = {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource": "*"
    }
  ]
}

const params = {
  PolicyDocument: JSON.stringify(ADMIN_POLICY_OBJ),
  PolicyName: "GodLevelAccessPolicy",
  Description: "This policy will give access to all services and resources available" 
}

iam.createPolicy(params, function(err, data) {
  if(err) {
    console.log(err)
  }

  console.log(data);
})