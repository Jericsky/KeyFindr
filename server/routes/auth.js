const express = require('express');
const { registerUser, loginUser, logoutUser, hello } = require('../controllers/auth');

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser)

router.get('/hello', hello)

module.exports = router;