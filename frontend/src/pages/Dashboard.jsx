import { useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import BookItem from "../components/BookItem"
import Spinner from '../components/Spinner'
import { getBooks, reset } from "../features/books/bookSlice"
import SearchItem from '../components/SearchItem'
import axios from "axios"
import Modal from 'react-modal'
import { GrFormClose } from "react-icons/gr";

let bookArr = []

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {books, isLoading, isError, message} = useSelector((state) => state.books)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState(''); 

  const setModalIsOpenToTrue =()=>{
    setModalIsOpen(true)
  }

  const setModalIsOpenToFalse =()=>{
    setModalIsOpen(false)
    bookArr = []
  }

  useEffect(() => {

    if(isError){
      console.log(message)
    }

    if(!user){
      navigate('/login')
    }

    if(user){
      dispatch(getBooks())
    }
    else{
      navigate('/login')
    }

    return () => {
      dispatch(reset())
    }


  }, [user, navigate, isError, message, dispatch])

  if(isLoading){
    return <Spinner />
  }

  const fetchBook = async (myTitle) => {  
    
    const options = {
      method: 'GET',
      url: `https://hapi-books.p.rapidapi.com/search/${myTitle}`,
      headers: {
        'X-RapidAPI-Key': '67631460aemsh500c60fedb3fa1ep1bc9a8jsnf19f5a5688f8',
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      const myArr = response.data
      
      myArr.map((book) => (
        bookArr.push(book)
      ))} catch (error) {
      console.error(error);
    }

    console.log(bookArr)
    setTitle('')
  }
  
  const searchBook = async () => {
    await fetchBook(title)
    setModalIsOpenToTrue()
  }
    

  return (
    <>
      <section className="heading">
        <h1>Welcome to {user && user.name}'s Bookshelf</h1>
      </section>
      {/* <BookForm /> */}
      <div className="form-group">
          <label htmlFor="title">Book Title</label>
          <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <button className="btn btn-block" onClick={searchBook}>Search For a Book</button>
      </div>

      {/* Search Modal */}
        <Modal className="modal" isOpen={modalIsOpen} ariaHideApp={false}>         
        <button className="modalClose" onClick={setModalIsOpenToFalse}><h1><GrFormClose /></h1></button>             
          {bookArr.length > 0 ? (<>
          <table>
            <tbody>
              <tr>
                <th>Book Cover</th>
                <th>Book Title</th>
                <th>Book Description</th>
              </tr>
              {bookArr.map((book) => (          
            <SearchItem key={book.id} book={book} onAddBook={setModalIsOpenToFalse} />
          ))}
            </tbody>
          </table>          
        </>) : (<h3>No Results to display.</h3>)}
        </Modal>
        {books.length > 0 ? (<>
        <table>
        <tbody>
        <tr>
          <th>Book Cover</th>
          <th>Book Title</th>
          <th>Book Description</th>
        </tr>
        {books.map((book) =>(<BookItem key={book._id} book={book} />))}
        </tbody>
        </table>
        </> ): (<h3>You have no books saved.</h3>)}
    </>
  )
}
export default Dashboard