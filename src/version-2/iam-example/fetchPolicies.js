const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
  Scope: "All", // "Local" | "AWS" | "All"
}

// "Local" to list all local policites 
// "AWS" to list all AWS created policies
// "ALL" to list both

iam.listPolicies(params, function(err, data) {
  if(err) {
    console.log(err);
  }

  console.log(data);
})