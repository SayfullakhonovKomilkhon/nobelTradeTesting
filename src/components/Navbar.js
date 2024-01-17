import React from "react";
import '../sass/navbar.scss'
import logo from "../images/logo.svg";
import {Link} from "react-router-dom";
import {createBrowserHistory} from "history";


const Navbar = () => {
    const history = createBrowserHistory({window});
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img className="headerImg" src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
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
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;