import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()
    }

    const register = e => {
        e.preventDefault()
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

                <button className="login__registerButton" onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

// 3:26:31

export default Login
