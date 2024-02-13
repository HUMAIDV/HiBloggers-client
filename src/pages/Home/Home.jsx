// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Post from '../../components/Post/Post'

const Home = () => {
  return (
    <div className="main">
      <div className="navbar">{<Navbar />}</div>
      <div className="post">{<Post />}</div>
      
    </div>
  )
}

export default Home