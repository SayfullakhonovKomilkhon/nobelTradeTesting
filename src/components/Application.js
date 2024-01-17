import React from "react";
import arrow from "../images/arrow-top-right-large.svg";
import '../sass/application.scss'

const Application = () => {
    return(
        <>
            <div className="application">
                <div className="be-partners">
                    <p className="subtitle">
                        CТАНОВИТЕСЬ ПАРТНЕРАМИ И<br/> РАЗВИВАЙТЕСЬ ВМЕСТЕ С
                    </p>
                    <button className='btn'>ОТПРАВИТЬ ЗАЯВКУ <img src={arrow} alt=""/></button>
                </div>
                <p className='main-text'>NOBEL TRADE</p>
            </div>
        </>
    )
}
export default Application