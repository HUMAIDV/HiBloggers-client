// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { useAuth0 } from "@auth0/auth0-react";
import { BASE_URL } from '../../../Base_Url';

const ShowPost = () => {

  const [post, setPost] = useState({})
  const {id} = useParams();
  const { user } = useAuth0();


  useEffect (() => {
    axios
      .get(`${BASE_URL}/posts/${id}`)
      .then((response) => {
        setPost(response.data)
      })
      .catch((error) => {
        console.log(error);
        alert("An error occured while getting single post")
      })

  }, [])

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
    
    <div className='showpost'>
      <p className="title">{post.title}</p>
      <div className="info">
        <p className="author">By @{post.author}</p>
        <p className="date">21 Dec 2004</p>
      </div>
      {user.nickname === post.author && (

      <div className="btn">
        <Link to={`/posts/edit/${id}`}><button>Edit</button></Link>
        <Link to={`/posts/delete/${id}`}><button>Delete</button></Link>
      </div>
      )}
      <div className="image">
        <img src={`${BASE_URL}/${post.cover}`} alt="image" />
      </div>
      <div className="mc-container">
        <div className="content" dangerouslySetInnerHTML={{__html:post.content}}/>
        </div>
    </div>
    </div>
  )
}

export default ShowPost