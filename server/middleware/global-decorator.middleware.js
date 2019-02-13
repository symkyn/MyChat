const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

function globalDecorator(app) {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/../build'));
}

module.exports = globalDecorator;