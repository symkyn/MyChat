const express = require('express');
const twilio = require('twilio')
const client = new twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

const SMSRouter = express.Routher();

SMSRouter.post('/messages', (req, res) => {
    res.header('Content-Type', 'aplication/json');
    client.message
        .create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: req.body.to,
            body: req.body.body
        })
        .then(() => {
            res.status(200).send({success: true})
        })
        .catch(err => {
            console.warn(err);
            next({message: 'internal server error'})
        })
})

module.exports = SMSRouter