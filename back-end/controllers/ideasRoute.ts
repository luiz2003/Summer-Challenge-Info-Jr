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

const postIdeia = async (req:any, res:any) => {
  try {
    const results = await database.newIdeia(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

const category = async (req:any, res:any) => {
  try {
    const results = await database.byCategory(req.params.category);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

const id = async (req:any, res:any) => {
  try {
    const results = await database.byId(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = {
  all,
  postIdeia,
  category,
  id,
};
