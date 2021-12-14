const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
  port: process.env.DB_PORT,
});

interface Idea {
    title:string,
    category:string,
    main_link:string,
    scnd_link:string,
    description:string
}

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
  newIdeia: (idea:Idea) => new Promise((resolve, reject) => {
    connection.query('INSERT INTO ideias SET ?', idea, (err: any, results: any) => {
      if (err) {
        return reject(err);
      }
      console.log('Sucessful db post');
      return (resolve(results));
    });
  }),
  byCategory: (category:string) => new Promise((resolve, reject) => {
    connection.query('SELECT * FROM ideias WHERE category = ?', category, (err: any, results: any) => {
      if (err) {
        return reject(err);
      }
      console.log('Sucessful db query');
      return (resolve(results));
    });
  }),
};

module.exports = db;
