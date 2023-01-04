const express = require('express');
const router = express.Router();
const userControler = require('../controller/user')


router.post('/signup', userControler.create_user)

router.post("/login", userControler.login_user)


module.exports = router;