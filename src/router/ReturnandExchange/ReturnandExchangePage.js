import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import '../../assets/css/ReturnandExchangePage.css';

function Dropdown({ title, content, id, selectedDropdown, setSelectedDropdown }) {
  const isOpen = selectedDropdown === id;

  const toggleDropdown = () => {
    setSelectedDropdown(isOpen ? null : id);
  };

  return (
    <div className="dropdown-container">
      <div className="header" onClick={toggleDropdown}>
        <span>{title}</span>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {isOpen && (
        <div className="content">
          {content}
        </div>
      )}
    </div>
  );
}

function ReturnAndExchangePage() {
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  return (
    <div className="return-exchange-page">
      <Dropdown
        id={1}
        title="Değişim ve İade politika ve prosedürleriniz nelerdir?"
        content="ErenShop müşterisiyseniz değerlisiniz çünkü müşterilerimizin memnuniyeti ve beklentileri bizim için önemlidir bu nedenle ücretsiz değişim ve iade güvenceniz bulunmaktadır. 
        Herhangi bir nedenle siparişinizden memnun kalmazsanız, satın aldığınız ürün yada ürünlerinizi, orjinal ambalajında, kullanılmammış ve etiketleri çıkartılmamış olması koşuluyla teslim aldığınız tarihten 
        itibaren 14 gün içinde değişim ve iade işlemi için geri gönderebilirsiniz."
        selectedDropdown={selectedDropdown}
        setSelectedDropdown={setSelectedDropdown}
      />
      <Dropdown
        id={2}
        title="Değişim ve İade işlemini nasıl yapabilirim?"
        content="İade yapmak için tekrardan bizlerle iletişime geçmelisiniz.."
        selectedDropdown={selectedDropdown}
        setSelectedDropdown={setSelectedDropdown}
      />
      <Dropdown
        id={3}
        title="Değişim ve İade kargo masraflarını ben mi ödeyeceğim?"
        content="Bizim anlaşmalı kargo firmalarımızla iade gerçkleştirilirse ücretsiz şekilde iade gerçkleşir.Fakat sizin terchi ettiğiniz kargo şirketiyle iade yaparsanız kargo iade ücretini siz ödersiniz."
        selectedDropdown={selectedDropdown}
        setSelectedDropdown={setSelectedDropdown}
      />
      <Dropdown
        id={4}
        title="İade işlemlerinde kesinti gerçekleşiyor mu?"
        content="Hayır, erenshop.com'dan yapacağınız alışverişlerinizde iade gönderdiğiniz ürünlerin satın almış olduğunuz tutarları size iade edilir. Satın aldığınız ürünlerin iade tutarlarından herhangi bir kesinti gerçekleşmez.
        Ürünlerin size ulaşması amacıyla ödediğiniz Kargo Ücreti ve Kapıda Ödemeli siparişlerinizde tahsil edilen Kapıda Ödeme Hizmet Bedeli iade edilmemektedir"
        selectedDropdown={selectedDropdown}
        setSelectedDropdown={setSelectedDropdown}
      />
    </div>
  );
}

export default ReturnAndExchangePage;
