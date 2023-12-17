const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'Please add a Title value.']
    },
    url: {
        type: String,
        required: [true, 'Please add a Web Address']
    },
    cover: {
        type: String,
        required: [true, 'Please add a Book Cover URL']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Book', bookSchema)