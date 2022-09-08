'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();

const router = express.Router();
router.get('/', (req, res) => {
  const name = req.query.name;
  res.writeHead(200, { 
    'Content-Type': 'text/html', 'charset':'UTF-16' 
  });
  if(name === undefined) {
      res.write(`<h1>Replace YourName in the end of the following link and see what happens --> https://kevkiil.netlify.app/?name=YourName</h1>`);
    } else if (name === 'YourName')
    {
      res.write(`<h1>Is your name actually YourName? Please change it and use your actual name ;)</h1>`);
    }
    else if (name.toLowerCase().search('your') !== -1)
    {
      res.write(`<h1>I see what you did there ;)</h1>`);
    }
    else {
      res.write(`<h1>Tere, ${name}!</h1>`);
    }
  res.end();
});



app.use('/', router);  // path must route to lambda


module.exports = app;
module.exports.handler = serverless(app);
