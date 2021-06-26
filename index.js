'use strict';

// get access to env file
require('dotenv').config();



// boot server from server file uesing env port
require('./src/server.js').start(process.env.PORT);