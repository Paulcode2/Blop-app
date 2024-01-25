import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import HomeCarousel from "./Carousel";
import Typewriter from "typewriter-effect";
import { AiFillDelete } from "react-icons/ai";
// import {firebase}

import "../styles/home.scss";

const Home = ({ isAuth }) => {
  const [postLists, setPost] = useState([]);

  const postsCollecion = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await getDocs(postsCollecion);
      setPost(postsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log(postsData)
    };
    getPosts();
  }, []);

 

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="home">
      <h1>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 100,
            strings: [
              "Welcome to Flash blog!",
              "Drop Trending and latest gists with ease!",
              // "Here's a solution!",
              // "Login, create your posts and share!",
            ],
          }}
        />
      </h1>

      <HomeCarousel />
      {/* Testing */}
        {/* <div className="post_con">
            <div className="posts">
            <div className="title">
              <div className="header">
                <h1>Crypto Tips</h1>
              </div>
              <div className="delete">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    <AiFillDelete />
                  </button>
                )}
              </div>
            </div>
            <div className="texts">
              <div className="textsCon">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore beatae quaerat, voluptate numquam debitis magni possimus, iure repudiandae a iste labore nemo impedit nulla quibusdam at architecto deleniti dolores!</div>
            </div>
            <h3>Author: Paul Levites</h3>
          </div>
          <div className="posts">
            <div className="title">
              <div className="header">
                <h1>Crypto Tips</h1>
              </div>
              <div className="delete">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    <AiFillDelete />
                  </button>
                )}
              </div>
            </div>
            <div className="texts">
              <div className="textsCon">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore beatae quaerat, voluptate numquam debitis magni possimus, iure repudiandae a iste labore nemo impedit nulla quibusdam at architecto deleniti dolores!</div>
            </div>
            <h3>Author: Paul Levites</h3>
          </div>
          </div> */}
      
      {postLists.map((post) => {
        return (
          <div className="post_con">
            
            <div className="posts">
            <div className="title">
              <div className="header">
                <h1>{post.title}</h1>
              </div>
              <div className="delete">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    <AiFillDelete />
                  </button>
                )}
              </div>
            </div>
            <div className="texts">
              <div className="textsCon">{post.postText}</div>
            </div>
            <h3>Author: {post.author.name}</h3>
          </div>
          </div>
         );
      })} 
    </div>
  );
};

export default Home;
