import React from "react";
import Navbar from "./Navbar";
import '../sass/advantages.scss'
import capsuleMini from '../images/header-capsule-text-mini.svg'
import headerFactory from '../images/Factory.png'
import headerTruck from '../images/header-Trucks.png'
import headerOil from '../images/header-Oil.png'
import callCenter from '../images/call-center-img.png'
import partners from '../images/partners.png'
import advantagesSectionTruck from '../images/advantages-section-truck.png'
import advantagesRectangle from '../images/squre-elemrnt.svg'
import nobelTradeVideo from '../images/nobel trade video screen.png'

import Footer from "./Footer";
import Application from "./Application";

const Advantages = () => {
    return (
        <>
            <div className="advantages">
                <header className="header">
                    <Navbar/>
                    <h1>НАШИ <img src={capsuleMini} alt=""/> <br/> ПРЕИМУЩЕСТВА</h1>
                    <p className="subtitle">
                        Нам доверяют ведущие производители таких стран, как: Россия, Украина, Беларусь, Казахстан, Китай, Иран, Афганистан,<br/>Пакистан, Индия, Малайзия, Индонезия, Испания, Корт-де-Вуар
                    </p>
                    <div className="row">
                        <div className="col-lg-12">
                            <img src={headerFactory} alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <img src={headerTruck} alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <img src={headerOil} alt=""/>
                        </div>
                    </div>
                </header>
                <main>
                    <p className='subtitle'>
                        По данным таможенной статистике Узбекистана, РФ и стран Юго-Восточной Азии, <br/>компания Nobel Trade
                        является крупнейшим импортёром Масла Подсолнечного - причем, как как
                        фасованного,  так и наливного - Пальмового Жира и Соевого шрота
                    </p>
                    <div className="companies-info">
                        <h2 className='title'>NOBEL TRADE</h2>
                        <p className="companies-subtitle">
                            компания сочетающая в себе
                        </p>
                        <h3>СКОРОСТЬ И КАЧЕСТВО</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 text-left">
                            <h4>СОБСТВЕННЫЙ  CALL-CENTER <img src={capsuleMini} alt=""/></h4>
                            <p className='subtitle'>позволяет компании осуществлять качественный сервис своим клиентам и конечным потребителям.</p>
                        </div>
                        <div className="col-lg-6">
                            <img className='half-img' src={callCenter} alt=""/>
                        </div>
                        <div className="col-lg-6 mt-5">
                            <img className='half-img' src={partners } alt=""/>
                        </div>
                        <div className="col-lg-6 text-right mt-5 ">
                            <h4 className=''>У НАШЕЙ<br/> <img src={capsuleMini} alt=""/>КОМПАНИИ</h4>
                            <p className='subtitle'>организован свой дистрибьюторский бизнес  в Афганистане, куда привлечены свои собственные  специалисты из Узбекистана. </p>
                        </div>
                    </div>
                </main>
                <section>
                    <h3>КОМПАНИЯ <img src={capsuleMini} alt=""/><br/>NOBEL LOGISTIC</h3>
                    <p className='subtitle'>Которая входит в состав группы компаний Nobel, осуществляет международные перевозки в разные направления.  Она одна из немногих компаний, которая имеет транспортный коридор в Афганистане.</p>
                    <img className="advantages-truck" src={advantagesSectionTruck} alt=""/>
                    <h3 className='workers'>СОТРУДНИКИ КОМПАНИИ  NOBEL TRADE <img className="rectangle" src={advantagesRectangle} alt=""/></h3>
                    <p className="subtitle">в сплочённой командной работе, эффективно решают любые задачи, вне зависимости от сложности</p>
                    <img className='w-100' src={nobelTradeVideo} alt=""/>

                </section>
                <div className="application-part">
                    <Application/>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Advantages;