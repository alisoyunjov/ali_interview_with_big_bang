const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');


router.get('/', userCtrl.getAllUsers);


module.exports = router;