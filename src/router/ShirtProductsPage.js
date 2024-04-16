import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import '../assets/ShirtProductsPage.css';
import { shirtProducts } from '../services/imagesData';


const ShirtProductsPage = () => {

      const handleOrderClick = (link) => {
        window.location.href = link;
      };

  return (
    <div className="container mt-4">
      <div className="row">
        {shirtProducts.map(product => (
          <div key={product.id} className="col-lg-4 mb-4">
            <Card className='body'>
              <Card.Img className= "sizes" variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  Fiyat: {product.price} TL
                </Card.Text>
                <Button className="btnclick" onClick={() => handleOrderClick(product.link)}>Satın Al</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShirtProductsPage