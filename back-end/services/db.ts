const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
  port: process.env.DB_PORT,
});

const db = {
  all: () => new Promise((resolve, reject) => {
    connection.query('SELECT * FROM ideias', (err: any, results: any) => {
      if (err) {
        return reject(err);
      }
      console.log('Sucessful db query');
      return (resolve(results));
    });
  }),
};

module.exports = db;
