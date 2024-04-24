import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import "../../assets/css/ShirtProductsPage.css";
import { shirtProducts } from '../../services/imagesData';

const ShirtProductsPage = () => {
  const [category, setCategory] = useState('All');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredProducts = category === 'All' ? shirtProducts : shirtProducts.filter(product => product.category === category);

  const handleOrderClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12 mb-4">
          <label htmlFor="shrtCategorySelect" className="shrtCategoryLabel">Kategori:</label>
          <select id="shrtCategorySelect" className="shrtCategorySelect" value={category} onChange={handleCategoryChange}>
            <option value="All">Tümü</option>
            <option value="Kategori 1">Kategori 1</option>
            <option value="Kategori 2">Kategori 2</option>
            <option value="Kategori 3">Kategori 3</option>
          </select>
          <label htmlFor="shrtCategorySelect" className="shrtCategoryLabel">Kategori:</label>
          <select id="shrtCategorySelect" className="shrtCategorySelect" value={category} onChange={handleCategoryChange}>
            <option value="All">Tümü</option>
            <option value="Kategori 1">Kategori 1</option>
            <option value="Kategori 2">Kategori 2</option>
            <option value="Kategori 3">Kategori 3</option>
          </select>
          <label htmlFor="shrtCategorySelect" className="shrtCategoryLabel">Kategori:</label>
          <select id="shrtCategorySelect" className="shrtCategorySelect" value={category} onChange={handleCategoryChange}>
            <option value="All">Tümü</option>
            <option value="Kategori 1">Kategori 1</option>
            <option value="Kategori 2">Kategori 2</option>
            <option value="Kategori 3">Kategori 3</option>
          </select>
        </div>
        {filteredProducts.map(product => (
          <div key={product.id} className="col-lg-3 mb-4">
            <Card className='shrtBodyCard'>
              <Card.Img className= "shrtSizes" variant="top" src={product.image} />
              <Card.Body className='shrtCardBody'>
                <Card.Title className='shrtCardTitle'>{product.name}</Card.Title>
                <Card.Text className='shrtCardText'>
                  Fiyat: {product.price} TL
                </Card.Text>
                <Button className="btn-primary" onClick={() => handleOrderClick(product.link)}>Satın Al</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShirtProductsPage;
