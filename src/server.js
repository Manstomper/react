const path = require('path');
const express = require('express');

express()
  .use(express.json())
  .use(express.static(path.join(__dirname, '..', 'public')))
  .get('/', function (req, res) {
    res.render(path.join(__dirname, '..', 'index.html'));
  })
  .listen(5000, '0.0.0.0');
