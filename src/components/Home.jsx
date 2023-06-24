import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import Typewriter from "typewriter-effect";
import { AiFillDelete } from "react-icons/ai";

import "../styles/home.scss";

const Home = ({ isAuth }) => {
  const [postLists, setPost] = useState([]);

  const postsCollecion = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await getDocs(postsCollecion);
      setPost(postsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

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
              "Having troubles dropping infos",
              "Here's a solution!",
              "Login, create your posts and share!",
            ],
          }}
        />
      </h1>
      <div className="header">
        <img
          src="https://unsplash.com/photos/QLqNalPe0RA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHdyaXRlciUyMHdyaXRpbmd8ZW58MHx8fHwxNjg3MzkxODUyfDA&force=true"
          alt=""
        />
      </div>
      {postLists.map((post) => {
        return (
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
        );
      })}
    </div>
  );
};

export default Home;
