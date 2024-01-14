import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux"
import React, { useCallback } from 'react'
import {createBook} from '../features/books/bookSlice'


function SearchItem({book, onAddBook}) {
  const dispatch = useDispatch()

    const handleCloseModal = useCallback(() => {
      onAddBook();
    },[onAddBook])

    const onSubmit = e => {
        e.preventDefault()
        dispatch(createBook({title:book.name, cover:book.cover, url:book.url}))
        handleCloseModal()        
    }
      
    if(!book.cover){
      return <div className="book">
      <h2>{book.title}</h2>
        <h4>Sorry no Cover available</h4>
      </div>
    }else {
      return (        
        <>
        <tr>
          <td>{book.cover && <img src={book.cover} alt="Book Cover" />}</td>
          <td>{book.name}</td>
          <td>{book.url && <a href={book.url}>Click here for the description</a>}</td>
          <td><form onSubmit={onSubmit}><button className="addBtn" type="submit"><FiPlus /></button></form></td>
        </tr>       
        </>
      )
    }
    
  }
  export default SearchItem