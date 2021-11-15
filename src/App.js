import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/login/Login';
import HomePage from "./components/HomePage";
import CheckoutPage from './components/CheckoutPage';

// npm install react-router-dom

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>  
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>    
  );
}

// 1:36:28

export default App;
