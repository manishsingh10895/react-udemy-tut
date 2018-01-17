const 
    mongoose = require('mongoose'),
    { Schema } = mongoose;

let UserSchema = new Schema({
    googleId: {
        type: String
    },
    
});

module.exports = mongoose.model('User', UserSchema);