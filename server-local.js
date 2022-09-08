// 'use strict';

// const app = require('./express/server');
const express = require("express");
const app = express();

app.get('/', function(req, res) {
    const name = req.query.name;
    res.send('Tere, ' + name + '!')
  })

app.listen(3000, () => console.log('Local app listening on port 3000!'));
