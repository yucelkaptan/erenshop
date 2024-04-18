import React, { useState } from 'react';
import "../../assets/css/UseofCookiesPage.css";

const UseofCookiesPage = () => {
    const [acceptedCookies, setAcceptedCookies] = useState(false);
    const [rejectedCookies, setRejectedCookies] = useState(false);

    const acceptCookies = () => {
        setAcceptedCookies(true);
    };

    const rejectCookies = () => {
        setRejectedCookies(true);
        window.location.href = 'https://www.google.com';
    };

    if (!acceptedCookies && !rejectedCookies) {
        return (
            <div id="cookie-notification">
                <p>Web sitemiz çerezleri kullanmaktadır. Devam ederek çerez kullanımını kabul etmiş olursunuz. Daha fazla bilgi için <a href="/gizlilik-politikasi">gizlilik politikamızı</a> ziyaret edebilirsiniz.</p>
                <div className="button-container">
                    <button onClick={acceptCookies} className="accept-button">Kabul Et</button>
                    <button onClick={rejectCookies} className="reject-button">Reddet</button>
                </div>
            </div>
        );
    }

};

export default UseofCookiesPage;
