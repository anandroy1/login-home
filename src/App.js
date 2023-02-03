import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from "./components/Login";
import { LoginContext } from "./Contexts/LoginContext"


function App() {

  const [showBlogs, setShowBlogs] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <LoginContext.Provider value={{username, setUsername, setShowBlogs}}>
        {showBlogs ? <Home /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
