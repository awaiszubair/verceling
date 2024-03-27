const express = require('express');
const routes = express.Router();

routes.get('/:pass', (req, res) => {
    const { pass } = req.params
    if (pass == '123') {
        return res.status(200).json({ status: true })
    }
    else {
        return res.status(200).json({ status: false })
    }
})

module.exports = routes