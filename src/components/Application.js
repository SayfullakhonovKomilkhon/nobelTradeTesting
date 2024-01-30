import React, {useState} from "react";
import arrow from "../images/arrow-top-right-large.svg";
import '../sass/application.scss'
import ApplicationModal from "./ApplicationModal";


const Application = () => {
    const [applicationModalActive , setApplicationModal] = useState(false)

    return(
        <>
            <div className="application">
                <div className="be-partners">
                    <p className="subtitle">
                        CТАНОВИТЕСЬ ПАРТНЕРАМИ И<br/> РАЗВИВАЙТЕСЬ ВМЕСТЕ С
                    </p>
                    <button className='btn open-btn' onClick={() => setApplicationModal(true)}>ОТПРАВИТЬ ЗАЯВКУ <img src={arrow} alt=""/></button>
                </div>
                <p className='main-text'>NOBEL TRADE</p>
            </div>
            <ApplicationModal active={applicationModalActive} setActive={setApplicationModal}/>
        </>
    )
}
export default Application