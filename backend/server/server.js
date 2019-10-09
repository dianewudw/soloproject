const path = require('path');
const express = require('express');
const app = express();
const port = 3000;


// app.get('/', function(req,res){
//     res
//     .status(200)
//     .send('you got this boo boo <3')
// })
// statically serve everything in the build folder on the route '/build'
// app.use('/build', express.static(path.join(__dirname, '../build')));
// // serve index.html on the route '/'
//   app.get('/', (req, res) => {
//     res.status(200)
//     .sendFile('index.html');
//   });

  app.get('/api', (req, res) => {
    res.send({express:'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
  });

app.listen(port, () => console.log(`You are doing great Sweetie! - Kris Jenner ${port}`));