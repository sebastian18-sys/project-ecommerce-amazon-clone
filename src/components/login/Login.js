import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"
import "./Login.css"

// npm install firebase
// npm install -g firebase-tools

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [user, setUser] = useState({});

    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser)
    // });

    const signIn = async e => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            console.log(user)
            if(user) {
                navigate("/")
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const register = async e => {
        e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)
            if(user) {
                navigate("/")
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By continuing, you agree to the terms of use and the | Amazon privacy.
                </p>
                
            </div>
            <div className="login__register">
                <h5>¿Eres nuevo en Amazon?</h5>
                <button className="login__registerButton" onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

// 3:47:52

export default Login
