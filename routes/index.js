const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hey! There",
    user: "Breniie",
    added: new Date(),
  },
  {
    text: "Kremlin Joined the party",
    user: "Putin",
    added: new Date(),
  }
]

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages});
});

module.exports = router;
