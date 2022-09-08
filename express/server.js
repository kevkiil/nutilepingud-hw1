'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', function(req, res) {
  const name = req.query.name;
  res.send('Tere, ' + name + '!')
  // if(name === undefined) {
  //   res.send('Add your name to the end of the URL like --> https://kevkiil.netlify.app/?name=YourName')
  // }
  // else{
  // res.send('Tere, ' + name + '!')
  // }
})


// get('/', function(req, res) {
//   const name = req.query.name;
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   if(name === undefined) {
//     res.write(`<h1>Add your name to the end of the URL like --> https://kevkiil.netlify.app/?name=YourName</h1>`);
//   } else {
//     res.write(`<h1>Tere, ${name}!</h1>`);
//   }
  
//   res.end();
// });

// router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
// router.post('/', (req, res) => res.json({ postBody: req.body }));

// app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
