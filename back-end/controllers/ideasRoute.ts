const database = require('../services/db.ts');

const all = async (req:any, res:any) => {
  try {
    const results = await database.all();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = { all };
