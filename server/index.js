const express = require('express');

require('dotenv').config({
    path: __dirname + '/../.env',
});

const globalDecorator = require('./middleware/global-decorator.middleware');

const app = express();

globalDecorator(app);

app.use((err, req, res, next) => {
    res.status(500).send(err);
})

const port = process.env.SERVER_PORT || 4000;

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`);
});