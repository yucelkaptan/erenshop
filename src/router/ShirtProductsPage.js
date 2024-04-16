import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import '../assets/ProductsPage.css';

// IMAGE IMPORTLAR //
import shirtProductImage1 from '../image/images1.jpg';
import shirtProductImage2 from '../image/images2.jpg';
import shirtProductImage3 from '../image/images3.jpg';
import shirtProductImage4 from '../image/images4.jpg';
import shirtProductImage5 from '../image/images5.jpg';
import shirtProductImage6 from '../image/images6.jpg';

const ShirtProductsPage = () => {

  const products = [
    { id: 1, name: "Ürün 1", image: shirtProductImage1, link: "#" },
    { id: 2, name: "Ürün 2", image: shirtProductImage2, link: "#" },
    { id: 3, name: "Ürün 3", image: shirtProductImage3, link: "#" },
    { id: 4, name: "Ürün 4", image: shirtProductImage4, link: "#" },
    { id: 5, name: "Ürün 5", image: shirtProductImage5, link: "#" },
    { id: 6, name: "Ürün 6", image: shirtProductImage6, link: "#" },
  ];

      const handleOrderClick = (link) => {
        window.location.href = link;
      };

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-lg-4 mb-4">
            <Card className='body'>
              <Card.Img className= "sizes" variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <br></br>
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