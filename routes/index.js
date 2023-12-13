const express = require('express');
const router = express.Router();

const homeController = require('../controller/homecontroller');
router.get('/',homeController.home);

router.post('/addHabit', homeController.addHabit);

router.get('/habitStatus/:habit_id&:date_id&:mark', homeController.habitStatus);

router.get('/deleteHabit/:id', homeController.deleteHabit);

// console.log('router is loaded')
module.exports = router;