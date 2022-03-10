import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../hooks/useUser';
import "./Login.css"

function Login() {

    const {email, password, signIn, handleEmail, handlePassword} = useUser();

    return (
        <div className="login">
            <Link to="/">
                <img loading='lazy' className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt='login-logo' />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form onSubmit={signIn}>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={handleEmail} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={handlePassword} />
                    <button className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By continuing, you agree to the terms of use and the | Amazon privacy.
                </p>
            </div>
            <div className="login__register">
                <h5>Are you new to Amazon?</h5>
                <a href='/signup' className="login__registerButton" >Create your Amazon account</a>
            </div>
        </div>
    )
}

export default Login
