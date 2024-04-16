import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import '../assets/ProductsPage.css';
import productImage1 from '../image/pictures.png';
import productImage2 from '../image/siyahelbise.jpg';
import productImage3 from '../image/kirmizielbise.jpg';
import productImage4 from '../image/pictures.png';
import productImage5 from '../image/siyahelbise.jpg';
import productImage6 from '../image/kirmizielbise.jpg';

const ProductsPage = () => {

  const products = [
    { id: 1, name: "Ürün 1", image: productImage1, link: "#" },
    { id: 2, name: "Ürün 2", image: productImage2, link: "#" },
    { id: 3, name: "Ürün 3", image: productImage3, link: "#" },
    { id: 4, name: "Ürün 4", image: productImage4, link: "#" },
    { id: 5, name: "Ürün 5", image: productImage5, link: "#" },
    { id: 6, name: "Ürün 6", image: productImage6, link: "#" },
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

export default ProductsPage