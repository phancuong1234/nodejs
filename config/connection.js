const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || '',
});
db.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
module.exports = db;
// connection.connect();
//
//
// connection.end();
// # sourceMappingURL=connection.js.map
