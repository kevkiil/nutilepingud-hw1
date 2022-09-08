'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();

const router = express.Router();
router.get('/', (req, res) => {
  const name = req.query.name;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if(name === undefined) {
      res.write(`<h1>Add your name to the end of the URL like --> https://kevkiil.netlify.app/?name=YourName</h1>`);
    } else {
      res.write(`<h1>Tere, ${name}!</h1>`);
    }
  res.end();
});



app.use('/', router);  // path must route to lambda


module.exports = app;
module.exports.handler = serverless(app);
