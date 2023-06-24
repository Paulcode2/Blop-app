import "../styles/post.scss";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setpostText] = useState("");

  const postsCollecion = collection(db, "posts");

  const navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollecion, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      // authorName: auth.currentUser.displayName,
      // authorId: auth.currentUser.uid,
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="post">
      <div className="container">
        <h1>Post an Article!</h1>
        <div className="input">
          <label> Headline:</label>
          <input
            placeholder="Write a Headline...."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="textarea">
          <label> Post:</label>
          <textarea
            placeholder="Write a Post..."
            onChange={(event) => {
              setpostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Post </button>
      </div>
    </div>
  );
};

export default CreatePost;
