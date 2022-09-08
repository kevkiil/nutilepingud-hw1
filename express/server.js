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
  if(name === undefined) {
      res.write(`<h1>Asenda YourName näidatud lingi lõpus oma nimega ja vaata mis juhtub --> https://kevkiil.netlify.app/?name=YourName</h1>`);
    } else if (name === 'YourName')
    {
      res.write(`<h1>Kas su nimi ongi YourName? Palun muuda see nüüd ikkagi ära ;)</h1>`);
    }
    else if (name.toLowerCase().replace(" ", "").search('your') !== -1)
    {
      res.write(`<h1>Arvad, et ma ei näinud seda ette? ;)</h1>`);
    }
    else {
      res.write(`<h1>Tere, ${name}!</h1>`);
    }
  res.end();
});

router.post('/', function(req, res) { 
var name = req.body.name;
res.writeHead(200, { 
  'Content-Type': 'text/html; charset=utf-8'
});
res.write(`<h1>Tere, ${name}!</h1>`);

});


app.use('/', router);  // path must route to lambda
app.use(bodyParser.json());

module.exports = app;
module.exports.handler = serverless(app);
