const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema (
    {
        name: {type: String, require:true, trim:true, uppercase:true},
        phone: {type: Number, trim:true},
        email: {type: String, require:true, trim:true},
        subject: {type: String},
        message: {type: String}

    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model('Message', MessageSchema)