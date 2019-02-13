const SMSRouter = require('./sms.router')

function routerHub(app) {
    app.use('/sms', SMSRouter)
}

module.exports = routerHub