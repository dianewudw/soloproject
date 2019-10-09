const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
//check if it's necessary to connect client to pool here
const { Pool, Client} = require('pg');

app.get('/api', (req, res) => {
  res.send({express:'Received req at /api'});
});

app.listen(port, () => console.log(`You are doing great Sweetie! - Kris Jenner ${port}`));