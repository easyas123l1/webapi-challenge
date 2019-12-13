const express = require("express");

const setupMiddleware = require("./setupMiddleware.js");
const projects = require("../projects/projects.js");
const actions = require('../actions/actions.js')

const server = express();

// middleware
setupMiddleware(server);

// routes
server.use('/api/projects', projects);
server.use('/api/actions', actions);

module.exports = server;
