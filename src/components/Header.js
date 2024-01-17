import React from 'react';
import '../sass/header.scss';
import capsule from '../images/header-capsule-text.svg'
import aboutImg from "../images/header-capsule-text-mini.svg";
import rectengleImg from "../images/squre-elemrnt.svg";
import videoPlayer from "../images/videoplayer.png";
import oilCard from '../images/oil-col-4-card.png'
import bottom5Card from '../images/bottom-col-5-card.png'
import top5Card from '../images/top-col-5-card.png'
import top3CardMain from '../images/top-col-3-card.png'
import bottom3CardMini from '../images/bottom-col-3-card.png'
import arrow from '../images/arrow-top-right-large.svg'
import years15 from '../images/15years-truck picture.png'
import uzbekistanMap from '../images/Uzbekistan map.png'
import oil8000 from '../images/8000-oil.png'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Application from "./Application";
import sunFlower from '../images/sunflower.png'
import blackSeeds from '../images/black seeds.png'


const Header = () => {
    return (
        <>
            <div className="home text-white">
                <header className='header'>
                    <Navbar/>
                    <section className='header-info'>
                        <div className="row">
                            <div className="col-7">
                                <h1>NOBEL
                                    <span className='header-capsule'>
                                <img className='header-capsule_img' src={capsule} alt=""/>
                                <span className='header-text_style'>TRADE</span>
                                </span>
                                </h1>
                                <p className="subtitle">
                                    Компания NOBEL TRADE - крупнейший импортёр
                                    подсолнечного масла и пальмового жира  в Республику Узбекистан
                                </p>
                            </div>
                            <div className="col-5">
                                {/*<img src={headerLogoOil} alt=""/>*/}
                            </div>
                        </div>
                    </section>
                </header>
                <div className="about">
                    <section className="main">
                        <h3 className="title">
                            О КОМПАНИИ
                            <span className="about-capsule"><img className='about-img' src={aboutImg} alt=""/></span>
                        </h3>
                        <p className="subtitle">
                            NOBEL TRADE является ключевым поставщиком Сухого Молока, Сыворотки,<br/>
                            Крахмала,Кукурузного и Картофельного крахмала, какао, различные крупы а также Патоки кукуруза
                            на рынок Узбекистана. <br/> Это молодое направление в бизнесе Компании,
                            но за короткое время мы уже успели завоевать доверие многих клиентов в Узбекистане.
                        </p>
                        <div className="row">
                            <div className="col-lg-4">
                                <img className='card1 carded' src={oilCard} alt=""/>
                            </div>
                            <div className="col-lg-5">
                                <div className="col-12">
                                    <img className='card2 carded' src={top5Card} alt=""/>
                                </div>
                                <div className="col-12">
                                    <img className='card2 card3 carded' src={bottom5Card} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="col-12">
                                    <img className='card4 carded' src={top3CardMain} alt=""/>
                                </div>
                                <div className="col-12">
                                    <img className='card5 carded' src={bottom3CardMini} alt=""/>
                                </div>
                            </div>
                        </div>
                        <h2><span className='rectengle-img'><img src={rectengleImg} alt=""/></span>NOBEL TRADE</h2>
                        <p className='subtitle'>
                            Основана в 2009 году и в настоящее время в компании работают 150 человек.<br/>
                            Дистрибуционная сеть компании NOBEL TRADE состоит из 12 филиалов, со своими офисами<br/>
                            и складами, в 12 областях страны.
                        </p>
                        <img className='videoplayer' src={videoPlayer} alt=""/>
                    </section>
                    <section className="about-us">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card-about">
                                    <h3>15 лет</h3>
                                    <p className="subtitle">
                                        успешного опыта<br/>  на мировом рынке
                                    </p>
                                    <img src={years15} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-about">
                                    <h4>12 филиалов</h4>
                                    <p className="subtitle">
                                        со своими складами и <br/>  офисами в 12 областях  страны
                                    </p>
                                    <img src={uzbekistanMap} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-about">
                                    <h3>8000</h3>
                                    <p className="subtitle">
                                        торговых точек <br/>  достигает активная клиентская база
                                    </p>
                                    <img src={oil8000} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-12 ">
                                <div className="card-about d-flex justify-content-between py-4">
                                    <div className="col-lg-6">
                                        <img className='h-100' src={sunFlower} alt=""/>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={blackSeeds} alt=""/>
                                        <p className="subtitle">
                                            суммарная производственная мощность предприятий компаний
                                        </p>
                                        <h3 className='title'>
                                            365 000 тонн в год
                                        </h3>
                                        <p className="subtitle">
                                            переработки семян подсолнуха
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='partners'>
                        <div className="partners-page">
                            <h2>НАШИ ПАРТНЕРЫ<span className='rectengle-img'><img src={rectengleImg} alt=""/></span></h2>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card-about">

                                    </div>
                                </div>
                            </div>
                            <h3>ДОЧЕРНИЕ КОМПАНИИ</h3>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="partners-card">

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="partners-card">

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="partners-card">

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="partners-card">

                                    </div>
                                </div>

                            </div>
                            <Application/>
                        </div>
                    </section>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default Header;