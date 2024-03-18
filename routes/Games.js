const games = require('../games');
const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.json(games)
})

module.exports = routes