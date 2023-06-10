const mysql = require('mysql');
require('dotenv').config({ path: '../../../.env' });

const connection = mysql.createConnection({
  host: process.env.AWS_RDS_ENDPOINT, // AWS RDS endpoint,
  user: process.env.AWS_RDS_USERNAME, // whatever is the database username
  password: process.env.AWS_RDS_PASSWORD,
  port: process.env.AWS_RDS_PORT
});

connection.connect(function(err) {
  if(err) throw err;

  console.log('Connected to the DB!');
});