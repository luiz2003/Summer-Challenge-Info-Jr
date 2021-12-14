const express = require('express');

const router = express.Router();

const Controllers = require('../controllers/ideasRoute.ts');

router.get('/', Controllers.all);

router.post('/newIdeia', Controllers.postIdeia);

router.get('/:category', Controllers.category);

router.get('/id/:id', Controllers.id);

module.exports = router;
