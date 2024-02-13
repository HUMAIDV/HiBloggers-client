// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Editor from '../../components/Editor';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../../Base_Url';

const EditPost = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [file, setFile] = useState('')

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect (() => {
        axios
          .get(`${BASE_URL}/posts/${id}`)
          .then((response) => {
            setTitle(response.data.title)
            setContent(response.data.content)
            // setFile(response.data?.file?.[0])
          })
          .catch((error) => {
            console.log(error);
            alert("An error occured while getting single post data")
          })
    
      }, [])

    const handleEditBook = (e) => {

        const data = new FormData();
            data.set('title',title);
            data.set('content', content);
            data.set('file', file[0]);
        
        e.preventDefault();

        axios
            .put(`${BASE_URL}/posts/${id}`, data)
                .then(() => {
                    alert("Succesffully Updated!")
                    navigate('/')
                })
                .catch((error) =>{
                    alert("An error occured while updating")
                    console.log(error);
                })
    }

  return (
    <div>
            <div className="navbar">
                <Navbar />
            </div>
    <div className='form'>
      <h1>Edit Post</h1>
        <form action="">
            <label htmlFor="title">Title : </label>
            <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <div className="file">
                        <label htmlFor="cover">Cover : </label>
                        <input type="file" onChange={(e) => setFile(e.target.files)} />
                    </div>
            <div className="mc">
                <Editor value={content} onChange={setContent} />
            </div>
            <div className="btn">
                <button onClick={handleEditBook}>Update</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default EditPost