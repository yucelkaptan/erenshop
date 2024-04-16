import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../assets/HomePage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/Slider.css';
import productImage1 from '../image/pictures.png';
import productImage2 from '../image/kirmizielbise.jpg';
import productImage3 from '../image/siyahelbise.jpg';

const HomePage = () => {

  const products = [
    { id: 1, image: productImage1, alt: 'Ürün 1', link: '#' },
    { id: 2, image: productImage2, alt: 'Ürün 2', link: '#' },
    { id: 3, image: productImage3, alt: 'Ürün 3', link: '#' },
];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
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
      <Card className='body mt-4 mb-2'>
        <Card.Body>
          <Card.Title>Hoşgeldiniz</Card.Title>
          <br></br>
          <Card.Text>
          Burada alışveriş yapmanın keyfini yaşamak için doğru adrestesiniz. 
          ErenShop olarak, siz değerli müşterilerimize en kaliteli ürünleri sunmayı ve alışveriş deneyiminizi unutulmaz kılmayı amaçlıyoruz.
          <br/><br/>
          Bizimle alışveriş yaparken, güvenilirlik ve kaliteye olan bağlılığımızı her adımda hissedeceksiniz. 
          Geniş ürün yelpazemizde aradığınız her şeyi bulabilir ve en rekabetçi fiyatlarla satın alabilirsiniz.
          <br/><br/>
          Müşteri memnuniyeti bizim için her şeyden önemlidir. 
          Profesyonel ve deneyimli ekibimiz, her zaman size yardımcı olmak için burada. 
          Siparişinizin her aşamasında destek alabilir ve herhangi bir sorunuzda bizimle iletişime geçebilirsiniz.
          <br/><br/>
          Siz değerli müşterilerimize teşekkür ederiz. Bizimle alışveriş yapmayı seçtiğiniz için memnuniyet duyuyoruz. 
          Unutmayın, ErenShop her zaman en iyisini sunmak için burada!
          <br/><br/>
          Keyifli alışverişler dileriz.
          <br/><br/>
          Saygılarımızla,
          <br/><br/>
          ErenShop Ekibi
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default HomePage