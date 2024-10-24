
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/BookMarks/Bookmarks'
import Header from './Components/Header/Header'



function App() {
  
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadingTime]=useState(0)

  const handleBookmarks =blog=>{
     const newBookmarks = [...bookmarks,blog];
     setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id,time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmarks={handleBookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
