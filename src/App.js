import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/home/Home';
import Checkout from './components/basket/Checkout';
import Login from './components/login/Login';

// npm install react-router-dom

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>  
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>    
  );
}

// 1:36:28

export default App;
