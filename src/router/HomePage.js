import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import '../assets/HomePage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/Slider.css';
import { sliderproducts, newProducts } from '../services/imagesData';




const HomePage = () => {

  
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const handleOrderClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="container mt-4">
      <Slider {...settings}>
        {sliderproducts.map(product => (
          <div key={product.id}>
            <a href={product.link}>
              <img src={product.image} alt={product.alt} className="slider-image" />
            </a>
          </div>
        ))}
      </Slider>
      <div className="row mt-5">
      {newProducts.map(product => (
    <div key={product.id} className="col-lg-4 mb-4">
      <Card className='body'>
        <Card.Img className="sizes" variant="top" src={product.image} />
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

export default HomePage