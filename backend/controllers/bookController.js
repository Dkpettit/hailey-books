const asyncHandler = require('express-async-handler')
const Book = require('../models/bookModel')
const User = require('../models/userModel')

// @desc    Get Books
// @route   GET /api/books
// @access  Private
const getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find({user: req.user.id })

    res.status(200).json(books)
})

// @desc    Set Book
// @route   POST /api/books
// @access  Private
const setBook = asyncHandler(async (req, res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error('Please add a Book Title')
    }
     
    console.log('this is the title' + req.body.title)

    const book = await Book.create({
        title: req.body.title,
        url: req.body.url,
        cover: req.body.cover,
        user: req.user.id,
    })

    res.status(200).json(book)
})

// @desc    Update Book
// @route   GET /api/books/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id)

    if(!book){
        res.status(400)
        throw new Error('Book not found.')
    }

    const user = await User.findById(req.user.id)

    // Check for User
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    // Ensure the logged in user matches the user that created the book
    if(book.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized.')
    }

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true} )
    res.status(200).json(updatedBook)
})

// @desc    Delete Book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
    
    const book = await Book.findById(req.params.id)

    if(!book){
        res.status(400)
        throw new Error('Book not found')
    }

    const user = await User.findById(req.user.id)

    // //check for user
    if(!user){
        res.status(401)
        throw new Error('User not found.')
    }
    //make sure the logged in user matches the owner of the show
    if(book.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized.')
    }

    await book.deleteOne()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getBooks,
    setBook,
    updateBook,
    deleteBook,

}