import React from "react";
import '../sass/katalog.scss'
import Navbar from "./Navbar";
import capsule from '../images/header-capsule-text.svg'
import capsuleMini from '../images/header-capsule-text-mini.svg'
import headerCard1 from '../images/header-catalog-card-img1.png'
import headerCard2 from '../images/header-catalog-card-img2.png'
import catalogTopCol7 from '../images/catalog-col-7-left.png'
import catalogTopCol5 from '../images/catalog-col-5-right.png'
import catalogTopCol12Left from '../images/catalog-col-12-top1.png'
import catalogTopCol12Right from '../images/catalog-col-12-top2.png'
import catalogBottomCol7 from '../images/catalog-col-7-bottom.png'
import catalogBottomCol5 from '../images/catalog-col-5-bottom.png'
import catalogBottomCol12Left from '../images/catalog-col-12-bottom1.png'
import catalogBottomCol12Right from '../images/catalog-col-12-bottom2.png'
import arrow from '../images/arrow-top-right-large.svg'
import korzino from '../images/card-korzina.svg'
import Application from "./Application";
import Footer from "./Footer";
import catalog3Col7 from '../images/catalog3-col-7.png'
import catalog3Col5 from '../images/catalog3-col-5.png'
import catalog3Col6Left from '../images/catalog3-col-6left.png'
import catalog3Col6Right from '../images/catalog3-col-6right.png'
import catalog4Col7 from '../images/catalog4-col-7.png'
import catalog4Col5Top from '../images/catalog4-col-5-top.png'
import catalog4Col5Bottom from '../images/catalog4-col-5-bottom.png'
import catalogBgVideo from '../images/catalog-video.mp4'





const Katalog = () => {
    return (
        <>
            <div className="catalog text-white">
                <div className="video">
                    <video src={catalogBgVideo} autoPlay muted loop className='video-bg'/>
                </div>
                <header className='header'>
                    <Navbar/>
                    <div className="header-title">
                        <h1>NOBEL TRADE</h1>
                        <p className="subtitle">
                            <img src={capsule} alt=""/>
                            работает с более 25 надежными и проверенными поставщиками <br/>  из России и Казахстана,
                            предоставляя от 30 видов торговых марок.
                        </p>
                    </div>
                    <div className="row d-flex
                    justify-content-between">
                        <div className="col-lg-6">
                            <div className="catalog-card d-flex justify-content-between align-items-center my-lg-5 p-lg-3">
                                <p className="subtitle text-white text-left">Осуществляется и собственное производство  на базе
                                    маслоэкстракционного завода “Ecoborn”.  Выпускается 3
                                    вида подсолнечного масла  высшего сорта и кормовая
                                    продукция с высокой  энергетической ценностью.</p>
                                <img src={headerCard1} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="catalog-card d-flex justify-content-between align-items-center my-lg-5 p-lg-3">
                                <p className="subtitle text-white text-left">По сей день “Nobel Trade” активно развивается  и растет,
                                    открывая новые направления.  Исследует рынок, совершенствует внутреннюю  часть компании и предоставляет
                                    только  проверенный продукт.</p>
                                <img src={headerCard2} alt=""/>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="catalog-info-section">
                    <div className="catalog-info-section-top">
                        <h2 className="title pt-5 pb-3">
                            РАСТИТЕЛЬНОЕ <br/>МАСЛО
                            <img className="pl-2 mb-1" src={capsuleMini} alt=""/>
                        </h2>
                        <p className="subtitle pb-3">
                            Растительное масло создается
                            из натуральных продуктов и
                            обладает высокой пищевой
                            ценностью.
                            Его изготавливают из различных
                            растительных пищевых продуктов, таких как подсолнечник,
                            хлопок, оливки, соя и другие.
                            Для приема в пищу используют
                            рафинированное и нерафинированное масло.
                        </p>
                        <p className="subtitle">
                            Нерафинированное масло обладает выраженным вкусом и
                            запахом, а также может обладать
                            небольшим осадком.
                            Рафинированное масло не
                            обладает ярким цветом и запахом, в нем не бывает осадков.
                            Такое масло проходит больше
                            этапов очистки, чем рафинированное масло.
                        </p>
                        <div className="row mt-5 d-flex justify-content-between">
                            <div className="col-lg-7">
                                <img src={catalogTopCol7} alt=""/>
                            </div>
                            <div className="col-lg-5 d-flex flex-column">
                                <img src={catalogTopCol5} alt=""/>
                                <div className="row p-0 d-flex
                                justify-content-between
                                align-items-center">
                                    <div className="col-lg-6 pt-2">
                                        <img className='pr-1' src={catalogTopCol12Left} alt=""/>
                                    </div>
                                    <div className="col-lg-6 pt-2">
                                        <img className="pl-1" src={catalogTopCol12Right} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="catalog-info-section-bottom">
                        <h2 className="title pt-5 pb-3">
                            ПОДСОЛНЕЧНОЕ <br/>МАСЛО
                            <img className="pl-2 mb-1" src={capsuleMini} alt=""/>
                        </h2>
                        <p className="subtitle pb-3">
                            Подсолнечное масло изготавливается из особых сортов семян подсолнечника.
                            Оно содержит в себе большое количество витамина Е, который обладает полезными для организма свойствами. Оно удобно в приготовлении тем, что имеет низкую температуру застывания и не имеет
                            неприятного запаха или осадка.
                        </p>
                        <p className="subtitle">
                            Подсолнечное масло подходит для приготовления любых задуманных блюд!
                            Оно подходит для жарки, приготовления супов, заправления салатов, а также добавления в выпечку.
                            Подсолнечное масло не содержит холестерина, поэтому не приносит вреда орзганизму.
                        </p>
                        <div className="row mt-5 d-flex justify-content-between">
                            <div className="col-lg-5 d-flex flex-column">
                                <div className="row p-0 d-flex
                                justify-content-between
                                align-items-center">
                                    <div className="col-lg-6 pb-2">
                                        <img className='pr-1' src={catalogBottomCol12Left} alt=""/>
                                    </div>
                                    <div className="col-lg-6 pb-2">
                                        <img className="pl-1" src={catalogBottomCol12Right} alt=""/>
                                    </div>
                                </div>
                                <img src={catalogBottomCol5} alt=""/>
                            </div>
                            <div className="col-lg-7">
                                <img src={catalogBottomCol7} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="main-catalog">
                        <h2 className="title text-center py-5">
                            <img className='pl-2 mb-1' src={capsuleMini} alt=""/>
                            КАТАЛОГ ПРОДУКЦИИ
                        </h2>
                        <div className="row">
                            <div className="col-lg-3 mt-3">
                                <div className="catalog-card p-3">
                                    <div className="card-img">
                                        <img className='card-korzino' src={korzino} alt=""/>
                                    </div>
                                    <h3 className="text-center mt-3">Rimado</h3>
                                    <div className="card-button d-flex align-items-center">
                                        <button className='btn text-white' type={"button"}>
                                            подробнее
                                        </button>
                                        <img className='' src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="catalog-card p-3">
                                    <div className="card-img">
                                        <img className='card-korzino' src={korzino} alt=""/>
                                    </div>
                                    <h3 className="text-center mt-3">Rimado</h3>
                                    <div className="card-button d-flex align-items-center">
                                        <button className='btn text-white' type={"button"}>
                                            подробнее
                                        </button>
                                        <img className='' src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="catalog-card p-3">
                                    <div className="card-img">
                                        <img className='card-korzino' src={korzino} alt=""/>
                                    </div>
                                    <h3 className="text-center mt-3">Rimado</h3>
                                    <div className="card-button d-flex align-items-center">
                                        <button className='btn text-white' type={"button"}>
                                            подробнее
                                        </button>
                                        <img className='' src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="catalog-card p-3">
                                    <div className="card-img">
                                        <img className='card-korzino' src={korzino} alt=""/>
                                    </div>
                                    <h3 className="text-center mt-3">Rimado</h3>
                                    <div className="card-button d-flex align-items-center">
                                        <button className='btn text-white' type={"button"}>
                                            подробнее
                                        </button>
                                        <img className='' src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 mt-3">
                                <div className="catalog-card p-3">
                                    <div className="card-img">
                                        <img className='card-korzino' src={korzino} alt=""/>
                                    </div>
                                    <h3 className="text-center mt-3">Rimado</h3>
                                    <div className="card-button d-flex align-items-center">
                                        <button className='btn text-white' type={"button"}>
                                            подробнее
                                        </button>
                                        <img className='' src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="catalog-card p-3">
                                    <div className="card-img">
                                        <img className='card-korzino' src={korzino} alt=""/>
                                    </div>
                                    <h3 className="text-center mt-3">Rimado</h3>
                                    <div className="card-button d-flex align-items-center">
                                        <button className='btn text-white' type={"button"}>
                                            подробнее
                                        </button>
                                        <img className='' src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="catalog-card p-3">
                                    <div className="card-img">
                                        <img className='card-korzino' src={korzino} alt=""/>
                                    </div>
                                    <h3 className="text-center mt-3">Rimado</h3>
                                    <div className="card-button d-flex align-items-center">
                                        <button className='btn text-white' type={"button"}>
                                            подробнее
                                        </button>
                                        <img className='' src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="catalog-card p-3">
                                    <div className="card-img">
                                        <img className='card-korzino' src={korzino} alt=""/>
                                    </div>
                                    <h3 className="text-center mt-3">Rimado</h3>
                                    <div className="card-button d-flex align-items-center">
                                        <button className='btn text-white' type={"button"}>
                                            подробнее
                                        </button>
                                        <img className='' src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row  pb-5">
                            <div className="col-lg-3 mt-3">
                                <div className="catalog-card p-3">
                                    <div className="card-img">
                                        <img className='card-korzino' src={korzino} alt=""/>
                                    </div>
                                    <h3 className="text-center mt-3">Rimado</h3>
                                    <div className="card-button d-flex align-items-center">
                                        <button className='btn text-white' type={"button"}>
                                            подробнее
                                        </button>
                                        <img className='' src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="catalog-card p-3">
                                    <div className="card-img">
                                        <img className='card-korzino' src={korzino} alt=""/>
                                    </div>
                                    <h3 className="text-center mt-3">Rimado</h3>
                                    <div className="card-button d-flex align-items-center">
                                        <button className='btn text-white' type={"button"}>
                                            подробнее
                                        </button>
                                        <img className='' src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="catalog-card p-3">
                                    <div className="card-img">
                                        <img className='card-korzino' src={korzino} alt=""/>
                                    </div>
                                    <h3 className="text-center mt-3">Rimado</h3>
                                    <div className="card-button d-flex align-items-center">
                                        <button className='btn text-white' type={"button"}>
                                            подробнее
                                        </button>
                                        <img className='' src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="catalog-card p-3">
                                    <div className="card-img">
                                        <img className='card-korzino' src={korzino} alt=""/>
                                    </div>
                                    <h3 className="text-center mt-3">Rimado</h3>
                                    <div className="card-button d-flex align-items-center">
                                        <button className='btn text-white' type={"button"}>
                                            подробнее
                                        </button>
                                        <img className='' src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <main>
                    <div className="catalog-info-section-top">
                        <h2 className="title pt-5 pb-3">
                            ХЛОПКОВОЕ  <br/>МАСЛО
                            <img className="pl-2 mb-1" src={capsuleMini} alt=""/>
                        </h2>
                        <p className="subtitle pb-3">
                            Хлопковое масло - это особое масло, которое широко распространено в Азиатских странах.
                            Оно обладает особенным вкусом и большим количеством полезных веществ и элементов.
                        </p>
                        <p className="subtitle">
                            Такое масло используется при приготовлении восточных блюд и сладостей. Обладает коричневатым оттенком.
                        </p>
                        <div className="row mt-5 d-flex justify-content-between">
                            <div className="col-lg-7">
                                <img src={catalog3Col7} alt=""/>
                            </div>
                            <div className="col-lg-5 d-flex flex-column">
                                <img src={catalog3Col5} alt=""/>
                                <div className="row p-0 d-flex
                                justify-content-between
                                align-items-center">
                                    <div className="col-lg-6 pt-2">
                                        <img className='pr-1' src={catalog3Col6Left} alt=""/>
                                    </div>
                                    <div className="col-lg-6 pt-2">
                                        <img className="pl-1" src={catalog3Col6Right} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-around my-5">
                        <div className="col-lg-3 mt-3">
                            <div className="catalog-card p-3">
                                <div className="card-img">
                                    <img className='card-korzino' src={korzino} alt=""/>
                                </div>
                                <h3 className="text-center mt-3">Rimado</h3>
                                <div className="card-button d-flex align-items-center">
                                    <button className='btn text-white' type={"button"}>
                                        подробнее
                                    </button>
                                    <img className='' src={arrow} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-3">
                            <div className="catalog-card p-3">
                                <div className="card-img">
                                    <img className='card-korzino' src={korzino} alt=""/>
                                </div>
                                <h3 className="text-center mt-3">Rimado</h3>
                                <div className="card-button d-flex align-items-center">
                                    <button className='btn text-white' type={"button"}>
                                        подробнее
                                    </button>
                                    <img className='' src={arrow} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="catalog-info-section-top">
                        <h2 className="title pt-5 pb-3">
                            ХЛОПКОВОЕ  <br/>МАСЛО
                            <img className="pl-2 mb-1" src={capsuleMini} alt=""/>
                        </h2>
                        <p className="subtitle pb-3">
                            Хлопковое масло - это особое масло, которое широко распространено в Азиатских странах.
                            Оно обладает особенным вкусом и большим количеством полезных веществ и элементов.
                        </p>
                        <p className="subtitle">
                            Такое масло используется при приготовлении восточных блюд и сладостей. Обладает коричневатым оттенком.
                        </p>
                        <div className="row mt-5 d-flex justify-content-between">
                            <div className="col-lg-7">
                                <img src={catalog4Col7} alt=""/>
                            </div>
                            <div className="col-lg-5 d-flex flex-column">
                                <img src={catalog4Col5Top} alt=""/>
                                <div className="row p-0 ">
                                    <div className="col-lg-12 p-0 pt-2">
                                        <img src={catalog4Col5Bottom} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-around py-5">
                        <div className="col-lg-3 pt-3">
                            <div className="catalog-card p-3">
                                <div className="card-img">
                                    <img className='card-korzino' src={korzino} alt=""/>
                                </div>
                                <h3 className="text-center mt-3">Rimado</h3>
                                <div className="card-button d-flex align-items-center">
                                    <button className='btn text-white' type={"button"}>
                                        подробнее
                                    </button>
                                    <img className='' src={arrow} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-3">
                            <div className="catalog-card p-3">
                                <div className="card-img">
                                    <img className='card-korzino' src={korzino} alt=""/>
                                </div>
                                <h3 className="text-center mt-3">Rimado</h3>
                                <div className="card-button d-flex align-items-center">
                                    <button className='btn text-white' type={"button"}>
                                        подробнее
                                    </button>
                                    <img className='' src={arrow} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-3">
                            <div className="catalog-card p-3">
                                <div className="card-img">
                                    <img className='card-korzino' src={korzino} alt=""/>
                                </div>
                                <h3 className="text-center mt-3">Rimado</h3>
                                <div className="card-button d-flex align-items-center">
                                    <button className='btn text-white' type={"button"}>
                                        подробнее
                                    </button>
                                    <img className='' src={arrow} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="catalog-application pt-3">
                    <Application/>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Katalog;