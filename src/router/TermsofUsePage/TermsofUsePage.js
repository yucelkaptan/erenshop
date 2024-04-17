import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const TermsofUsePage = () => {
  return (
    <div className="container mt-4">
      <Card className='body'>
        <Card.Body>
          <Card.Title>Kullanım Koşulları</Card.Title>
          <Card.Text>
          Bu web sitesini ziyaret ederek ve kullanarak, aşağıdaki kullanım koşullarını kabul etmiş olursunuz. <br></br>
          Lütfen bu koşulları dikkatlice okuyun.
          </Card.Text>
          <Card.Title>Kullanım Kapsamı</Card.Title>
          <Card.Text>
          Bu web sitesi, ErenShop tarafından işletilmekte olup, sadece kişisel ve ticari olmayan amaçlarla kullanılmalıdır. <br></br>
          Site üzerinden sunulan herhangi bir içerik, ürün veya hizmet, önceden bildirim yapılmaksızın değiştirilebilir veya sonlandırılabilir.
          </Card.Text>
          <Card.Title>Hesap Oluşturma ve Güvenlik</Card.Title>
          <Card.Text>
          Bu web sitesinde hesap oluşturmak isteyen kullanıcılar, doğru ve güncel bilgiler sağlamakla yükümlüdürler. <br></br>
          Hesap bilgilerinizin gizli kalması ve güvenliği sizin sorumluluğunuzdadır. <br></br>
          Hesabınızın izinsiz kullanımından veya güvenlik ihlallerinden ErenShop sorumlu değildir
          </Card.Text>
          <Card.Title>Üçüncü Taraf Bağlantıları</Card.Title>
          <Card.Text>
          Bu web sitesi, üçüncü taraf web sitelerine bağlantılar içerebilir. <br></br>
          Bu bağlantılar sadece kullanıcı kolaylığı için sağlanmış olup, <br></br>
          bu web sitelerinin içeriği veya gizlilik uygulamalarıyla ilgili olarak herhangi bir sorumluluk kabul etmemekteyiz.
          </Card.Text>
          <Card.Title>Fikri Mülkiyet Hakları</Card.Title>
          <Card.Text>
          Bu web sitesinde bulunan tüm içerikler (metinler, grafikler, logolar, videolar vb.), ErenShop veya lisans sahipleri tarafından telif hakkı, <br></br>
          ticari marka ve diğer fikri mülkiyet hakları ile korunmaktadır. İzinsiz olarak kopyalanması, değiştirilmesi, dağıtılması veya kullanılması yasaktır.
          </Card.Text>
          <Card.Title>Sorumluluk Reddi</Card.Title>
          <Card.Text>
          Bu web sitesinin kullanımından kaynaklanan herhangi bir zarardan ErenShop, çalışanları, yöneticileri veya temsilcileri sorumlu değildir. <br></br>
          Bu siteyi kullanarak, tüm riskleri üstlenirsiniz ve ErenShop'un herhangi bir sorumluluğunu reddedersiniz.
          </Card.Text>
          <Card.Title>Kullanım Koşullarının Değiştirilmesi</Card.Title>
          <Card.Text>
          Bu kullanım koşulları, ErenShop tarafından herhangi bir zamanda değiştirilebilir veya güncellenebilir. <br></br>
          Değişiklikler web sitesinde yayınlandıktan sonra derhal yürürlüğe girer. <br></br>
          Bu nedenle, bu sayfayı düzenli olarak ziyaret ederek güncellemeleri kontrol etmeniz önerilir.
          </Card.Text>
          <Card.Title>İletişim</Card.Title>
          <Card.Text>
          Bu kullanım koşulları hakkında herhangi bir sorunuz veya endişeniz varsa, lütfen bize "deneme@gmail.com" adresinden ulaşın.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default  TermsofUsePage
