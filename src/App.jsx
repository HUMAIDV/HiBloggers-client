// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import CreatePost from './pages/PostPages/CreatePost'
import ShowPost from './pages/PostPages/ShowPost'
import EditPost from './pages/PostPages/EditPost'
import DeletePost from './pages/PostPages/DeletePost'
import Search from './components/Search/Search'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/posts/create' element={<CreatePost />} />
      <Route path='/posts/details/:id' element={<ShowPost />} />
      <Route path='/posts/edit/:id' element={<EditPost />} />
      <Route path='/posts/delete/:id' element={<DeletePost />} />
      <Route path='/posts/search' element={<Search />} />
    
    </Routes>
  )
}

export default App
