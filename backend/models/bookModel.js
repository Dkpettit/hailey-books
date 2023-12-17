const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
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