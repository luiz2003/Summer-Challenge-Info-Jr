const express = require('express');

const router = express.Router();

const Controllers = require('../controllers/ideasRoute.ts');

router.get('/', Controllers.all);

module.exports = router;
