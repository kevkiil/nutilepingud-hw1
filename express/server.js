'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
  const name = req.query.name;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Tere, ${name}!</h1>`);
  res.end();
});



app.use('/', router);  // path must route to lambda


module.exports = app;
module.exports.handler = serverless(app);
