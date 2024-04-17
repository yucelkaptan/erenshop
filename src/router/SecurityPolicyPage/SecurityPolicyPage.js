import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const SecurityPolicyPage = () => {
  return (
    <div className="container mt-4">
      <Card className='body'>
        <Card.Body>
          <Card.Title>Gizlilik Politikası</Card.Title>
          <Card.Text>
          Bu Gizlilik Politikası, ErenShop tarafından işletilen ErenShop.com web sitesi "ErenShop.com" üzerinden <br></br>
          toplanan bilgilerin nasıl kullanıldığı, saklandığı ve paylaşıldığına ilişkin politikaları açıklar.
          </Card.Text>
          <Card.Title>Toplanan Bilgiler</Card.Title>
          <Card.Text>
          Müşterilerimizden, ürün satın alma işlemleri sırasında veya Site üzerinde gezinirken kişisel bilgiler toplayabiliriz. <br></br>
          Bu bilgiler arasında adınız, adresiniz, e-posta adresiniz, telefon numaranız gibi tanımlayıcı bilgiler bulunabilir. <br></br>
          Ayrıca, Site kullanımıyla ilgili genel bilgiler de otomatik olarak toplanabilir, bu da IP adresiniz, tarayıcı türü, <br></br>
          referans sayfaları ve ziyaret süreleri gibi bilgileri içerebilir.
          </Card.Text>
          <Card.Title>Bilgi Kullanımı</Card.Title>
          <Card.Text>
          Topladığımız kişisel bilgileri, siparişlerin işlenmesi, müşteri hizmetleri sağlanması, Site üzerindeki <br></br>
          deneyiminizi iyileştirmek ve promosyonlar veya pazarlama iletişimi göndermek için kullanabiliriz. <br></br>
          Ayrıca, toplu olarak anonimleştirilmiş verileri analiz etmek ve Site performansını izlemek için de kullanılabilir.<br></br>
          </Card.Text>
          <Card.Title>Bilgi Paylaşımı</Card.Title>
          <Card.Text>
          Kişisel bilgilerinizi asla üçüncü taraflarla ticari amaçlarla paylaşmayız. Ancak, üçüncü taraf hizmet sağlayıcıları ile bilgi paylaşabiliriz; <br></br>
          bu, ödeme işlemleri yapmak, lojistik hizmetleri sağlamak veya Site üzerindeki işlevselliği desteklemek gibi hizmetleri içerebilir. <br></br>
          Ayrıca, yasal gereklilikler veya hükümet talepleri doğrultusunda kişisel bilgilerinizi açıklama zorunluluğumuz olabilir.<br></br>
          </Card.Text>
          <Card.Title>Çerezler</Card.Title>
          <Card.Text>
          Site, çerezler gibi teknolojileri kullanarak kullanıcıların Site'yi nasıl kullandığını izleyebilir. <br></br>
          Çerezler, Site'nin belirli bölümlerine erişim sağlamak için kullanıcıların tercihlerini kaydedebilir. <br></br>
          Kullanıcılar, tarayıcı ayarları aracılığıyla çerez kullanımını reddetme veya çerezleri silme seçeneğine sahiptir, <br></br>
          ancak bu durumda Site'nin bazı özelliklerini kullanamayabilirler.<br></br>
          </Card.Text>
          <Card.Title>Gizlilik Politikası Güncellemeleri</Card.Title>
          <Card.Text>
          Bu Gizlilik Politikası, Site'deki değişikliklere bağlı olarak güncellenebilir. <br></br>
          Herhangi bir önemli değişiklik durumunda, güncellenmiş politikayı Site üzerinden yayınlayarak sizi bilgilendireceğiz. <br></br>
          </Card.Text>
          <Card.Title>İletişim Bilgileri</Card.Title>
          <Card.Text>
          Gizlilik politikamız hakkında sorularınız veya endişeleriniz varsa, lütfen bize "denem@gmail.com" adresinden ulaşın.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SecurityPolicyPage