import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './router/HomePage'; 
import ProductsPage from './router/ProductsPage'; 
import AboutPage from './router/AboutPage'; 
import CommunicationPage from './router/CommunicationPage'; 
import './App.css';
import { useState } from 'react';

const App = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
      setIsOpen(!isOpen); 
    };

  return (
    <>
    <Router>
    <nav className="navbar navbar-expand-lg bg-body-tertiary changing">
      <div className="container-fluid">
        
        <Link to="/" className="navbar-brand">ErenShop</Link>
        
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Anasayfa</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Ürünler</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">Hakkımızda</Link>
            </li>
            <li className="nav-item">
              <Link to="/communication" className="nav-link">İletişim</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/communication" element={<CommunicationPage />} />
      </Routes>
    </div>
  </Router>
  </>

  
  )
}

export default App