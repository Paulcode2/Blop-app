import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import { auth } from "./firebase-config";
import {signOut} from 'firebase/auth'
import Home from './components/Home'
import Login from './components/Login'
import CreatePost from './components/CreatePost'
// import { useNavigate } from 'react-router-dom';
import './App.scss'

function App() {

  // const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () =>{
    signOut(auth).then(() =>{
      localStorage.clear()
      setIsAuth(false)
      // navigate("/Login");
      window.location.pathname = ("/Login")
    })
  }
  
  return (
    <Router>

      <nav>
        <div className='nav'>
        <div className="logo">
        <Link to="/">
          Flash Blog
        </Link>
        </div>
        <div className="links">
        {/* <Link to="/">
          Home
        </Link> */}
      { !isAuth ? ( 
        <Link to="/Login">Login</Link> 
      ) : (
      <>
        <Link to="/create">Create Post</Link>
        <Link onClick={signUserOut}>Log out</Link> 
      </>
        )}

        
        </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth = {isAuth} /> } />
        <Route path="/Login" element= { <Login setIsAuth={ setIsAuth } />} />
        <Route path="/create" element={<CreatePost isAuth = {isAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
