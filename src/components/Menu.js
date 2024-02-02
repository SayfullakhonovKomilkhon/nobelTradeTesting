import React from 'react';
import {Link} from "react-router-dom";
import '../sass/menu.scss'
import {createBrowserHistory} from "history";
import instagram from "../images/white-instagram.svg";
import telegram from "../images/white-telegram.svg";
import phone from "../images/phone icon.svg";
import location from "../images/location icon.svg";
import closeButton from '../images/close-button.svg'

const Menu = ({active,setActive}) => {
    const history = createBrowserHistory({window});
    return (
        <>
            <div className={active ? "menu-navbar activeTab" : "hide" } onClick={() => setActive(false)}>
                <div className="collapse menu-collapse navbar-collapse" id="navbarNavAltMarkup" >
                    <button className={`btn close-button`} type='button'><img src={closeButton} alt=""/></button>
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link  to="/" className={` nav-link ${history.location.pathname === "/" ? "active" : ""}`}>ГЛАВНАЯ</Link></li>
                        <li className="nav-item" href="#"><Link  to="/" className={` nav-link ${history.location.pathname === "/" ? "active" : ""}`}>О КОМПАНИИ</Link></li>
                        <li className="nav-item" href="#"><Link  to="/" className={` nav-link ${history.location.pathname === "/" ? "active" : ""}`}>ПАРТНЕРЫ</Link></li>
                        <li className="nav-item"><Link to="/order" className={`nav-link ${history.location.pathname === "/order" ? "active" : ""}`}>НАШИ ПРЕИМУЩЕСТВА</Link></li>
                        <li className="nav-item" href="#"><Link  to="/" className={` nav-link ${history.location.pathname === "/" ? "active" : ""}`}>ПАРТНЕРЫ</Link></li>
                        <li className="nav-item"><Link to="/product" className={`nav-link ${history.location.pathname === "/product" ? "active" : ""}`}>КАТАЛОГ</Link></li>

                    </ul>
                    <div className="changeLanguage">
                        <div className="rus">rus</div>
                        <div className="uzb">uzb</div>
                        <div className="eng">eng</div>
                    </div>
                    <div className="contact">
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
                    <h6>©2024 Nobel Trade. All rights reserved.</h6>
                </div>
            </div>
        </>
    );
};

export default Menu;