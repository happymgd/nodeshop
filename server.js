'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require("body-parser");



app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(8080,(err) =>{
  if(err) console.error('Could NOT start server',err)
  else console.error('Server started');
  });
