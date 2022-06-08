const express = require('express');

const employeeRoute = require('./employee');

const router = express.Router();

router.use('/employee', employeeRoute)

module.exports = router;