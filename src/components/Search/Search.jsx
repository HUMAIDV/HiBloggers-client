// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
// import useFetch from '../../../hooks/useFetch';


const Search = () => {

    const [query, setQuery] = useState("");
    // const [posts, setPosts] = useState("");

    const handleSearch = (e) => {
        setQuery(e.target.value)
    } 

    let {data} = axios.get(`http://localhost:3333/posts?populate=*&filters[title][$contains]=${query}`);

    // let {data} = axios.get(`http://localhost:3333/posts`, {
    //     params:{
    //         filter: 'title',
    //         query: query,
    //     }
    // });

    if(!query.length){
        data = null;
    }

    // const search = () => {
    //      axios
    //         .get(`http://localhost:3333/posts?populate*&filters[title][$contains]=${query}`)
    //         .then((response) => {
    //             setPosts(response.data)
    //         })
        
    //     }
    //     if(!query.length){
    //         posts = null ;
    //     }

  return (
    <>
    <Navbar />
    <div>
        Search
        <input type="text" id="search" value={query} onChange={handleSearch} />
        {/* <button onClick={search}>Search</button> */}
    </div>
    {!query.length &&
        <span className="heading">
        Start typing to see products you are looking for...
        </span> 
    }
    <div className="ms">
    
    {data?.data?.map(post => (
        <div key={post.id} className="sr">
            <p className="title">{post.title}</p>
       </div>
    ))}
    </div>
    </>
  )
}

export default Search