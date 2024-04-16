import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import '../assets/HomePage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/Slider.css';


// IMAGE IMPORTLAR //
import productImage1 from '../image/pictures.png';
import productImage2 from '../image/kirmizielbise.jpg';
import productImage3 from '../image/siyahelbise.jpg';
import NewproductImage1 from '../image/siyahelbise.jpg';
import NewproductImage2 from '../image/kirmizielbise.jpg';
import NewproductImage3 from '../image/pictures.png';
import shirtProductImage4 from '../image/images4.jpg';
import shirtProductImage5 from '../image/images5.jpg';
import shirtProductImage6 from '../image/images6.jpg';
import shirtProductImage1 from '../image/images1.jpg';
import shirtProductImage2 from '../image/images2.jpg';
import shirtProductImage3 from '../image/images3.jpg';

const HomePage = () => {

  const products = [
    { id: 1, image: productImage1, alt: 'Ürün Adı', link: '#' },
    { id: 2, image: productImage2, alt: 'Ürün Adı', link: '#' },
    { id: 3, image: productImage3, alt: 'Ürün Adı', link: '#' },
    { id: 4, image: shirtProductImage1, alt: 'Ürün Adı', link: '#' },
    { id: 5, image: shirtProductImage2, alt: 'Ürün Adı', link: '#' },
    { id: 6, image: shirtProductImage3, alt: 'Ürün Adı', link: '#' },
];
  const newProducts = [
    { id: 1, name: "Ürün Adı", image: NewproductImage1, alt: 'Ürün Adı', link: '#' },
    { id: 2, name: "Ürün Adı", image: NewproductImage2, alt: 'Ürün Adı', link: '#' },
    { id: 3, name: "Ürün Adı", image: NewproductImage3, alt: 'Ürün Adı', link: '#' },
    { id: 4, name: "Ürün Adı", image: shirtProductImage4, alt: 'Ürün Adı', link: '#' },
    { id: 5, name: "Ürün Adı", image: shirtProductImage5, alt: 'Ürün Adı', link: '#' },
    { id: 6, name: "Ürün Adı", image: shirtProductImage6, alt: 'Ürün Adı', link: '#' },
  ]
 
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
        {products.map(product => (
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

export default HomePage