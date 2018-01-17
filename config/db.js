module.exports = {
    "production": {
        "uri": process.env.MONGO_URI || "mongodb://manish:terminator@ds159707.mlab.com:59707/emaily-template"
    }, 
    "development": {
        "uri": "mongodb://manish:terminator@ds159707.mlab.com:59707/emaily-dev" 
    }
}