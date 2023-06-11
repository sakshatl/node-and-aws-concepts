import pg from 'pg';

const client = new pg.Client({
  host: process.env.AWS_RDS_ENDPOINT,
  port: process.env.AWS_RDS_PORT,
  database: 'hello-world',
  user: process.env.AWS_RDS_USERNAME,
  password: process.env.AWS_RDS_PASSWORD
});

// ===== CONNECTING TO DATABASE =====
await client.connect();

async function createConnection() {
  try {
    const result = await client.query('SELECT NOW()');
    if(result) {
      console.log("Success: Connected to the database!");
    }
  } catch (err) {
    console.log("Error: Failed in conneting to the database!");
  }
}

async function createDatabase() {
  const QUERY = "CREATE DATABASE node_and_aws_sandbox";
  try {
    const result = await client.query(QUERY);
    if(result) {
      console.log(result, 'Success: New database created');
    }
  } catch (err) {
    console.log(err);
  }
}

async function createTable() {
  const QUERY = "CREATE TABLE USERS (ID INT PRIMARY KEY NOT NULL, NAME TEXT NOT NULL, EMAIL TEXT NOT NULL)";
  try {
    const result = await client.query(QUERY);
    if(result) {
      console.log('Success: New table created!');
    }
  } catch (err) {
    console.log(err);
  }
}

await createConnection();
// await createDatabase();
// await createTable();

// === END THE CONNECTION TO DATABASE ===
// await client.end();
