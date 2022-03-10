import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/login/Login';
import HomePage from "./components/HomePage";
import CheckoutPage from './components/CheckoutPage';
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth"
import { useStateValue } from './StateProvider';
import PaymentPage from './components/PaymentPage';
import OrdersPage from './components/OrdersPage';
import Signup from './components/signup/Signup';


function App() {
    
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
        if(authUser) {
            // user logged in
            dispatch({
                type: 'SET_USER',
                user: authUser
            })
        } else {
            // user logged out
            dispatch({
                type: 'SET_USER',
                user: null
            })
        }
        });
  }, [])

  return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/orders" element={<OrdersPage />}/>  
                    <Route path="/login" element={<Login />}/>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </div>
        </Router>    
  );
}

export default App;
