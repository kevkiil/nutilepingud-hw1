'use strict';
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require("body-parser");
const app = express();

const router = express.Router();
router.get('/', (req, res) => {
  const name = req.query.name;
  res.writeHead(200, { 
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(`
  <head>
      <title>Kevin's 1st homework</title>
   </head>
  `);
  if(name === undefined) {
    res.write(`<h3>Asenda YourName näidatud lingi lõpus oma nimega ja vaata mis juhtub --> https://kevkiil.netlify.app/?name=YourName</h3>`);
  } else if (name === 'YourName')
  {
    res.write(`<h3>Kas su nimi ongi YourName? Palun muuda see nüüd ikkagi ära ;)</h3>`);
  }
  else if (name.toLowerCase().replace(" ", "").search('your') !== -1)
  {
    res.write(`<h3>Arvad, et ma ei näinud seda ette? ;)</h3>`);
  }
  else {
    res.write(`<h3>Tere, ${name}!</h3>`);
  }
  
  
  res.end();
});

var jsonParser = bodyParser.json()
router.post('/', jsonParser, function(req, res) { 
  
  var name = req.body.name;
  res.writeHead(200, { 
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(`<h3>Tere, ${name}!</h3>`);
  res.end();
  });

app.use(express.static(__dirname + '/public'));
app.use('/', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
