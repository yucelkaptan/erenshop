import React from 'react'
import "../../assets/css/ShirtProductsPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { shirtProducts } from '../../services/imagesData';


const ShirtProductsPage = () => {

      const handleOrderClick = (link) => {
        window.location.href = link;
      };

  return (
    <div className="container mt-4">
      <div className="row">
        {shirtProducts.map(product => (
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

export default ShirtProductsPage