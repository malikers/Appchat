const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/user', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../view/user.html'))
});

module.exports = router;
