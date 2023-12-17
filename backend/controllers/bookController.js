const asyncHandler = require('express-async-handler')

// @desc    Get Books
// @route   GET /api/books
// @access  Private
const getBooks = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Books'})
})

// @desc    Set Book
// @route   POST /api/books
// @access  Private
const setBook = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add some Book details')
    }
    res.status(200).json({message: 'Set Book'})
})

// @desc    Update Book
// @route   GET /api/books/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update book ${req.params.id}`})
})

// @desc    Delete Book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete book ${req.params.id}`})
})

module.exports = {
    getBooks,
    setBook,
    updateBook,
    deleteBook,

}