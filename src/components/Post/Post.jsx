// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Post.css'
import SinglePost from './SinglePost'

const Post = () => {
  return (
    <div className='post-container'>
      <div className="posts">
        <SinglePost />
      </div>
    </div>
  )
}

export default Post