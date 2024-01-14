import { useDispatch } from 'react-redux'
import {deleteBook} from '../features/books/bookSlice'

function BookItem({book}) {  
  const dispatch = useDispatch()
  return (
    
    <>
        <tr>
          <td>{book.cover && <img src={book.cover} alt="Book Cover" />}</td>
          <td>{book.title}</td>
          <td>{book.url && <a href={book.url}>Click here for the description</a>}</td>
          <td><button onClick={() => dispatch(deleteBook(book._id))} className="deleteBtn">Delete</button></td>
        </tr>       
        </>
   
  )
}
export default BookItem