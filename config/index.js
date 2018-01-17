const 
    auth = require('./auth'),
    db = require('./db')

let environment = process.env.NODE_ENV || 'development';

module.exports = {
    auth: auth[environment],
    db: db[environment]
}