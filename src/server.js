'use strict'

const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', homeHandler);

function homeHandler(request, response){
  response.status(200).send('Hello from RavenTable Server endpoints to follow')
}

module.exports = {
  server : app,
  start : port => {
    if(!port) {throw new Error('Missing Port');}
    app.listen(port, ()=> console.log(`Server booted and running on ${port}`));
  },
};