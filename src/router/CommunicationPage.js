import React from 'react'
import '../assets//CommunicationPage.css';
import { Card } from 'react-bootstrap';

const CommunicationPage = () => {
  return (
    <Card className='communication mt-4'>
        <Card.Body>
          <Card.Title>İletişim Bilgileri</Card.Title>
          <br></br>
          <Card.Text>
          Sormak istediğiniz soruları , şikayetlerinizi aşağıdaki iletişim bilgilerinden yapabilirsiniz.
          <br></br>
          <br></br>
          Whatsapp İletişim : +90 555 555 55 55
          <br></br>
          <br></br>
          Mail Adres : deneme@gmail.com
          <br></br>
          <br></br>
          İnstagram : @deneme
          <br></br>
          <br></br>
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default CommunicationPage