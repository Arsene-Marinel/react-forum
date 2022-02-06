import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from "./util/firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createPost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<SignIn setIsAuth={setIsAuth} />} />
        <Route path="/login" element={<SignIn setIsAuth={setIsAuth} />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
