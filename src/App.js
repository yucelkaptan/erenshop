import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './router/HomePage/HomePage'; 
import ProductsPage from './router/ProductsPage/ProductsPage'; 
import AboutPage from './router/AboutPage/AboutPage'; 
import CommunicationPage from './router/CommunicationPage/CommunicationPage'; 
import ShirtProductsPage from './router/ShirtProductsPage/ShirtProductsPage';
import ReturnandExchangePage from "./router/ReturnandExchange/ReturnandExchangePage";
import './App.css';
import { useState } from 'react';
import logo from "./assets/img/Logo.png"
import SecurityPolicyPage from './router/SecurityPolicyPage/SecurityPolicyPage';
import TermsofUsePage from './router/TermsofUsePage/TermsofUsePage';

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
      <a href="/" className="navbar-brand">
            <img src={logo} alt="ErenShop Logo" width={250}/>
          </a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Anasayfa</Link>
            </li>
            <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Ürünler
                  </a>
                  <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Elbise">Elbiseler</Link>
                    <Link className="dropdown-item" to="/Gomlek">Gömlek</Link>
                  </li>
                </ul>
            </li>
            <li className="nav-item">
              <Link to="/Hakkimizda" className="nav-link active">Hakkımızda</Link>
            </li>
            <li className="nav-item">
              <Link to="/iletişim" className="nav-link active">İletişim</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Elbise" element={<ProductsPage />} />
            <Route path="/Hakkimizda" element={<AboutPage />} />
            <Route path="/iletişim" element={<CommunicationPage />} />
            <Route path="/Gomlek" element={<ShirtProductsPage />} />
            <Route path="/iade-degisim" element={<ReturnandExchangePage />} />
            <Route path="/gizlilik-politikasi" element={<SecurityPolicyPage />} />
            <Route path="/kullanim-kosullari" element={<TermsofUsePage />} />
          </Routes>
        </div>
      </Router>
  </>

  
  )
}

export default App