const { Pool, Client } = require('pg');

const client = new Client({
  host: '172.31.45.88',
  user: 'michelle',
  password: 'ppp',
  database: 'yelp'
});

client.connect((err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Postgres connected!');
});

module.exports = client;
