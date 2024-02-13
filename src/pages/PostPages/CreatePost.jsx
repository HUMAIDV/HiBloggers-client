// eslint-disable-next-line no-unused-vars
import React from 'react'
import './PostPage.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Editor from '../../components/Editor'
import Navbar from '../../components/Navbar/Navbar'
import { useAuth0 } from "@auth0/auth0-react";
import { BASE_URL } from '../../../Base_Url'

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [file, setFile] = useState('')
    
    const { user } = useAuth0();
    const a = user.nickname;
    const as = a.toString();
    const author = as;
    console.log(author);
    // const auth = {user.nickname}
    // const author = useState({user.nickname})


    const navigate = useNavigate();

    const handleSaveBook = (e) => {
        
        const data =  new FormData();
            data.set('title', title);
            data.set('content', content);
            data.set('file', file[0]);
            data.set('author', author);
        
        e.preventDefault();

        axios
            .post(`${BASE_URL}/posts`, data)
            .then(() => {
                alert('Successfully Posted!')
                navigate('/')
            })
            .catch((error) => {
                alert('An error occured while posting')
                console.log(error)
            })

    }

    return (
        <div>
            <div className="navbar">
                <Navbar />
            </div>
            <div className='form'>
                <h1>Create Post</h1>
                <form action="">
                    <label htmlFor="title">Title : </label>
                    <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <div className="file">
                        <label htmlFor="cover">Cover</label>
                        <input type="file" onChange={(e) => setFile(e.target.files)} />
                    </div>
                    <div className="mc">
                        <Editor value={content} onChange={setContent} />
                    </div>
                    <div className="btn">
                        <button onClick={handleSaveBook}>Create</button>
                    </div>
                </form>
                 {/* <input id='author' name='author' value={user.nickname} onChange={e => setAuthor(e.target.value)} /> */}
            </div>
        </div>
    )
}

export default CreatePost