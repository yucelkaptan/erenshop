import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import "../../assets/css/ProductsPage.css";
import { dressProducts } from '../../services/imagesData';

const ProductsPage = () => {
  const [category, setCategory] = useState('All');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredProducts = category === 'All' ? dressProducts : dressProducts.filter(product => product.category === category);

  const handleOrderClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12 mb-4">
          <label htmlFor="prdCategorySelect" className="prdCategoryLabel">Kategori:</label>
          <select id="prdCategorySelect" className="prdCategorySelect" value={category} onChange={handleCategoryChange}>
            <option value="All">Tümü</option>
            <option value="Kategori 1">Kategori 1</option>
            <option value="Kategori 2">Kategori 2</option>
            <option value="Kategori 3">Kategori 3</option>
          </select>
          <label htmlFor="prdCategorySelect" className="prdCategoryLabel">Kategori:</label>
          <select id="prdCategorySelect" className="prdCategorySelect" value={category} onChange={handleCategoryChange}>
            <option value="All">Tümü</option>
            <option value="Kategori 1">Kategori 1</option>
            <option value="Kategori 2">Kategori 2</option>
            <option value="Kategori 3">Kategori 3</option>
          </select>
          <label htmlFor="prdCategorySelect" className="prdCategoryLabel">Kategori:</label>
          <select id="prdCategorySelect" className="prdCategorySelect" value={category} onChange={handleCategoryChange}>
            <option value="All">Tümü</option>
            <option value="Kategori 1">Kategori 1</option>
            <option value="Kategori 2">Kategori 2</option>
            <option value="Kategori 3">Kategori 3</option>
          </select>
        </div>
        {filteredProducts.map(product => (
          <div key={product.id} className="col-lg-3 mb-4">
            <Card className='prdBody'>
              <Card.Img className= "prdSizes" variant="top" src={product.image} />
              <Card.Body className='prdCardBody'>
                <Card.Title className='prdCardTitle'>{product.name}</Card.Title>
                <Card.Text className='prdCardText'>
                  Fiyat: {product.price} TL
                </Card.Text>
                <Button className="prdBtnClick" onClick={() => handleOrderClick(product.link)}>Satın Al</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage;
