import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faShopify } from '@fortawesome/free-brands-svg-icons';
import '../assets/Footer.css';

const Footer = () => {
  return (
    <footer className="footer container mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Şirket</h5>
            <ul className="list-unstyled">
              <li><a href="/about">Hakkımızda</a></li>
              <li><a href="#">Gizlilik Politikası</a></li>
              <li><a href="#">Kullanım Koşulları</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Müşteri Hizmetleri</h5>
            <ul className="list-unstyled">
              <li><a href="#">İade ve Değişim</a></li>
              <li><a href="/communication">Müşteri Desteği</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Bizi Takip Edin</h5>
            <ul className="list-unstyled">
                <li><a href="#"><FontAwesomeIcon icon={faShopify} /> Shop</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">&copy; 2024 ErenShop. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
