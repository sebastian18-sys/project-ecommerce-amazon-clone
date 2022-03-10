import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export const useUser = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = e => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const signIn = async e => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            if(user) navigate("/")
        } catch (error) {
            console.log(error.message)
        }
    }

    const register = async e => {
        e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            if(user) navigate("/")
        } catch (error) {
            console.log(error.message)
        }
    }

    return {
        email,
        password,
        signIn,
        register,
        handleEmail,
        handlePassword,
    }
}