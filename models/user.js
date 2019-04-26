const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    date: {
        type: Date, 
        default: Date.Now
    }
})


const User = mongoose.model('User', UserSchema);

module.exports = User