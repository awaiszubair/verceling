const tech = require('../tech');
const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.json(tech)
})

module.exports = routes