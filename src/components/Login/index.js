import React, { useState } from 'react';
import app from "../../util/firebase-config";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../util/firebase-config";
import { signInWithPopup } from "firebase/auth";

const Login = (setIsAuth) => {
    let navigate = useNavigate();

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };

    const handleLogin = () => {
        clearErrors();
        app.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((error) => {
                switch(error.code) {
                    case "auth/user-not-found":
                        setEmailError(error.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(error.message);
                        break;
                }
            });
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
    };

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
          localStorage.setItem("isAuth", true);
          setIsAuth(true);
          navigate("/");
        });
      };

    const redirect = () => {
        navigate("/register");
    }

    return (
        <div className='App'>
             <section className='login'>
                 <div className='loginContainer'>
                    <label> Username </label>
                     <input 
                        type="text" 
                        autoFocus 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <p className='errorMsg'>{emailError}</p>
                    <label> Password </label>
                    <input 
                        type="password" 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <p className='errorMsg'>{passwordError}</p>
                    <div className='btnContainer'>
                        <button onClick={handleLogin}>SignIn</button>
                        <button  onClick={signInWithGoogle}>
                            Sign in with Google
                        </button>
                    <p>Don't have an account? <span onClick={redirect}>SignUp</span></p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;