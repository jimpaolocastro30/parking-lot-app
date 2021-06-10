var express = require('express');
var router = express.Router();
var service = require('./../services');
/* GET home page. */
router.get('/', service.index);

module.exports = router;
