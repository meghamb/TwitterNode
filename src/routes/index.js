const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

console.log('router up!');
router.get('/', homeController.root);

module.exports = router;