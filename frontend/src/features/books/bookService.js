import axios from 'axios'

const API_URL = (process.env.NODE_ENV === 'production') ? 'https://hailey-books.onrender.com/api/books/' :'http://localhost:5000/api/books/'

//Create new book
const createBook = async (bookData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, bookData, config)

    return response.data
}

//get user Books
const getBooks = async (token) => {

    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)

    return response.data

}

// Delete a book
const deleteBook = async (bookId, token) => {

    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + bookId, config)

    return response.data

}

const bookService = {
    createBook,
    getBooks,
    deleteBook,
}

export default bookService