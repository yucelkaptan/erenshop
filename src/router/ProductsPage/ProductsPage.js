import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import "../../assets/css/ProductsPage.css";
import { dressProducts } from '../../services/imagesData';



const ProductsPage = () => {

      const handleOrderClick = (link) => {
        window.location.href = link;
      };

  return (
    <div className="container mt-4">
      <div className="row">
        {dressProducts.map(product => (
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

export default ProductsPage