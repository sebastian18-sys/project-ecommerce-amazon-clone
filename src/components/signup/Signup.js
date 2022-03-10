import React from 'react';
import "./Signup.css";
import { Link } from 'react-router-dom'
import { useUser } from '../../hooks/useUser';

function Signup() {

    const {email, password, register, handleEmail, handlePassword} = useUser();

    return (
        <div className='signup'>
            <Link to="/">
                <img loading='lazy' className="signup__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt='login-logo' />
            </Link>
            <div className="signup__container">
                <h1>Sign up</h1>
                <form onSubmit={register}>
                    <h5>Name</h5>
                    <input type="text" />
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={handleEmail} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={handlePassword} />
                    <button className="signup__signUpButton">Sign Up</button>
                </form>
                <p>
                    By continuing, you agree to the terms of use and the | Amazon privacy.
                </p>
            </div>
            <div className="signup__login">
                <h5>Ya tiene una cuenta? <a href='/login'>Inicia Sesión</a></h5>
            </div>  
        </div>
    )
}

export default Signup