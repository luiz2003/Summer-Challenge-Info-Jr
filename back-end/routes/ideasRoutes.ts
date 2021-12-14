const express = require('express');

const router = express.Router();

const Controllers = require('../controllers/ideasRoute.ts');

router.get('/', Controllers.all);

router.post('/newIdeia', Controllers.postIdeia);

router.get('/:category', Controllers.category);

module.exports = router;
