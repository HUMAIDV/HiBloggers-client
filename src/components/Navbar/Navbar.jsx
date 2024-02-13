// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className='navbar'>
        <div className="logo"><Link to='/'>Logo</Link></div>
        {isAuthenticated && 
        
          <div className="greeting">Welcome, {user.nickname}</div>
        
        }
        {/* <Search /> */}
        <div className="navlist">
          <Link to={'/posts/search'}><button>Search</button></Link>

        {isAuthenticated ? (
        <>
          <Link to='/posts/create'><button>Create New Post</button></Link> 
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
          <img src={user.picture} alt="" />
        </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
          
        </div>
        
    </div>
  )
}

export default Navbar