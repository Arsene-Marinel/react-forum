import React, { useEffect, useState } from 'react';
import app from "../../util/firebase-config";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../util/firebase-config";

const Register = () => {
    let navigate = useNavigate();
    const postsCollectionRef = collection(db, "users");

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const handleSignUp = async () => {
        await addDoc(postsCollectionRef, {
            email,
            password
          });
        navigate("/");
    };

    const redirect = () => {
        navigate("/login");
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
                        <button onClick={handleSignUp}>SignUp</button>
                        <p>Don't have an account? <span onClick={redirect}>SignIn</span></p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;