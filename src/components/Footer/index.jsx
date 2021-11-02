import { Link } from 'react-router-dom';
import instagram from '../../img/instagram.svg';
import logos from '../../img/logos.png';
import verifiedByVisa from '../../img/VerifiedByVisa.png';
import './style.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="main__info">
                    <div className="info">
                        <p style={{ color: 'rgb(105, 145, 199)' }}>kseniya.pasmurtseva@mail.ru</p>
                        <a href="tel:+375299283086">+375 (29) 928-30-86</a>
                        <p>УНП  691737454 ИП Пасмурцева Ксения Александровна</p>
                        <p>г. Жодино, Сухогрядская, 10, 125</p>
                        <p>Режим работы: круглосуточно</p>
                        <p>Республика Беларусь, г. Жодино</p>
                        <Link to="/oferta" className="oferta">Публичная оферта</Link>
                        <Link to="/price" className="oferta">Прайс-лист</Link>
                        <Link to="/payment-rules" className="oferta">Правила оплаты картой</Link>
                        <Link to="/payment-delivery" className="oferta">Оплата</Link>
                    </div>
                    <div className="title__flex">
                        <div className="title">
                            <p className="title__main">50 оттенков таргета</p>
                            <p className="title__info">6-недельный курс по таргетированной рекламе</p>
                        </div>
                    </div>
                    <div className="contacts__flex">
                        <div className="contacts">
                            <div className="instagram" style={{ backgroundImage: `url(${instagram})`, backgroundSize: '35px 35px', backgroundRepeat: 'no-repeat' }}>
                                <a href="https://www.instagram.com/pasmurtseva_k/?hl=ru" target="_blank">
                                    @pasmurtseva_k
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="payments__icons">
                    <li className="payment" style={{ backgroundImage: `url(${logos})`, backgroundSize: '100% auto', backgroundPositionY: 'center', backgroundRepeat: 'no-repeat' }}></li>
                    <li className="payment" style={{ backgroundImage: `url(${verifiedByVisa})`, backgroundSize: 'auto 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;