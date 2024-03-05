import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Group 3@2x.png";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      if (userName === "user" && password === "password") {
        setTimeout(() => {
          navigate("/user/dashboard");
        }, 2000);
      } else {
        alert("Login Failure");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <div className="logo">
        <img className="comp" src={logo} alt="logo"></img>
      </div>
      <p id="para">We are Electric</p>
      <div className="inputs">
        <input
          type="text"
          placeholder="E-mail"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <button id="login" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div id="forgot">
        <a>Forgot Password ?</a>
      </div>
    </div>
  );
};

export default Login;
