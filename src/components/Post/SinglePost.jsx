// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import { BASE_URL } from '../../../Base_Url';

const SinglePost = () => {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts`)
      .then((response) => {
        setPosts(response.data.data)
      })
      .catch((error) => {
        alert("An error occured while getting posts")
        console.log(error);
      })
  }, [])

  return (
    <div className='singlepost-container'>
      {posts.length > 0 && posts.map((post) => (
      <div key={post._id} className="singlepost">
        <div className="img">
            <Link to={`/posts/details/${post._id}`}><img src={`${BASE_URL}/${post.cover}`} alt="image" /></Link>
        </div>
        
        <div className="text">
            <span className="title">{post.title}</span>
            <div className="author">
                <span className="name">By@{post.author}</span>
                <span className="time">{formatISO9075(post.createdAt)}</span>
            </div>
        <div className='rm'><Link to={`/posts/details/${post._id}`}>READ MORE...</Link></div>

            {/* <div className="main-content" dangerouslySetInnerHTML={{__html: post.content}}/> */}
    </div>
  </div>
  ))}
  </div>
  )
}

export default SinglePost