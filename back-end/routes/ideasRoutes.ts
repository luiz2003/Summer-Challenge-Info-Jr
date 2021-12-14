const express = require('express');

const router = express.Router();

const Controllers = require('../controllers/ideasRoute.ts');

router.get('/', Controllers.all);

router.post('/newIdeia', Controllers.postIdeia);

module.exports = router;
