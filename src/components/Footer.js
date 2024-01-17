import React from "react";
import arrow from "../images/arrow-top-right-large.svg";
import footerLogo from "../images/footer-logo.svg";
import instagram from "../images/white-instagram.svg";
import telegram from "../images/white-telegram.svg";
import phone from "../images/phone icon.svg";
import location from "../images/location icon.svg";
import '../sass/footer.scss'



const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="footer-components">
                    <div className="footer-form">
                        <p>АКТУАЛЬНЫЕ ВАКАНСИИ В<br/> НАШЕЙ КОМПАНИИ</p>
                        <button className='btn'>ОТПРАВИТЬ<br/>  СВОИ ДАННЫЕ <img src={arrow} alt=""/></button>
                    </div>
                    <div className="footer-navigate">
                        <div className="row">
                            <div className="col-lg-4 main">
                                <img src={footerLogo} alt=""/>
                                <ul className='navbar'>
                                    <li className='nav-item nav-link'>ГЛАВНАЯ</li>
                                    <li className='nav-item nav-link'>О КОМПАНИИ</li>
                                    <li className='nav-item nav-link'>ПАРТНЕРЫ</li>
                                    <li className='nav-item nav-link'>НАШИ ПРЕИМУЩЕСТВА</li>
                                </ul>
                            </div>
                            <div className="col-lg-2 main-part">
                                <ul className='navbar'>
                                    <li className='nav-item nav-link'>КАТАЛОГ</li>
                                    <li className='nav-item nav-link'>ВАКАНСИИ</li>
                                    <li className='nav-item nav-link'>КОНТАКТЫ</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-socials">
                                    <img src={instagram} alt=""/>
                                    <img src={telegram} alt=""/>
                                </div>
                                <div className="footer-contacts">
                                    <p className="phone-number">
                                        <img src={phone} alt=""/>
                                        +998 71 209 33 35
                                    </p>
                                    <p className="address">
                                        <img src={location} alt=""/>
                                        г. Ташкент, Кичик Халка Йули 4
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;