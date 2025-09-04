import { useState } from 'react'
import './App.css'

function App() {
  const [string, setString] = useState("")
  const [bookmarks, setBookmarks] = useState([])

  const handleChange = (e) => {
    setString(e.target.value)
  }
  const handleAdd = () => {
    setBookmarks((val) => [string, ...val] ) 
    console.log(bookmarks);
  }

  const handeleCahnge = (e) => {
    setString(e.target.value)
  }
  return (
    <div className = "bookmarks">
      <div className = "input">
    <input onChange={handeleCahnge} value = {string} type = "text" />
    <button onClick = {handleAdd} >add bookmarks</button>
      </div>
      <div className="bookmark-lisr">
        {bookmarks.map((el) => (
          <div className="bookmarks=">{el}</div>
        ))}
      </div>
    </div>
  )
}

export default App
