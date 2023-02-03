import React, { useContext } from "react";
import "./Login.css"
import { LoginContext } from "../Contexts/LoginContext";


function Login() {

    const { setUsername, setShowBlogs } = useContext(LoginContext);

    return (
        <div className="cover">
            <h1>Login to Home</h1>
            <input
                type="text"
                placeholder="Username"
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />
            <input type="password" placeholder="Password" />
            <button className="login-btn" onClick={() => { setShowBlogs(true) }}> LOGIN </button>
        </div>
    );
}

export default Login;