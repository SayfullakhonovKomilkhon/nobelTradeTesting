import React, {useState} from "react";
import '../sass/navbar.scss'
import logo from "../images/logo.svg";
import {Link} from "react-router-dom";
import {createBrowserHistory} from "history";
import burgerMenu from '../images/burger-menu.svg'
import Menu from "./Menu";


const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false)
    const history = createBrowserHistory({window});
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img className="headerImg" src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setMenuActive(true)}>
                    <img src={burgerMenu} alt=""/>
                </button>
                <Menu active={menuActive} setActive={setMenuActive}/>
                <div className="collapse nav-collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link  to="/" className={` nav-link ${history.location.pathname === "/" ? "active" : ""}`}>ГЛАВНАЯ</Link></li>
                        <li className="nav-item" href="#"><Link  to="/" className={` nav-link ${history.location.pathname === "/" ? "active" : ""}`}>О КОМПАНИИ</Link></li>
                        <li className="nav-item" href="#"><Link  to="/" className={` nav-link ${history.location.pathname === "/" ? "active" : ""}`}>ПАРТНЕРЫ</Link></li>
                        <li className="nav-item"><Link to="/order" className={`nav-link ${history.location.pathname === "/order" ? "active" : ""}`}>НАШИ ПРЕИМУЩЕСТВА</Link></li>
                        <li className="nav-item"><Link to="/catalog" className={`nav-link ${history.location.pathname === "/catalog" ? "active" : ""}`}>КАТАЛОГ</Link></li>
                        <li className="nav-item" href="#"><Link  to="/vacancies" className={` nav-link ${history.location.pathname === "/vacancies" ? "active" : ""}`}>ВАКАНСИИ</Link></li>
                        <li className="nav-item" href="#"><Link  to="/" className={` nav-link ${history.location.pathname === "/" ? "active" : ""}`}>КОНТАКТЫ</Link></li>

                    </ul>
                    <div className="changeLanguage">
                        <div className="rus">rus</div>
                        <div className="uzb">uzb</div>
                        <div className="eng">eng</div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;