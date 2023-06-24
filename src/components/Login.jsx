import "../styles/login.scss";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const googleSignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="login">
      <p>Sign in with google</p>
      <button className="login-btn" onClick={googleSignIn}>
        <FcGoogle />
      </button>
    </div>
  );
};

export default Login;
