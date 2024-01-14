import { useState } from "react"
import { useDispatch } from "react-redux"
import {createBook} from '../features/books/bookSlice'

function BookForm() {
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')
    const [url, setUrl] = useState('')
    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        dispatch(createBook({title, cover, url}))
        setTitle('')
        setCover('')
        setUrl('')
    }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Book Title</label>
                <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="cover">Cover URL</label>
                <input type="text" name="cover" id="cover" value={cover} onChange={(e) => setCover(e.target.value)} />
                <label htmlFor="url">Website</label>
                <input type="text" name="url" id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">
                    Add a Book
                </button>
            </div>
        </form>
    </section>
  )
}
export default BookForm