import React, {useEffect, useState} from "react";
import '../sass/applicationModal.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Checkbox from "@mui/material/Checkbox";
import '../sass/aboutModal.scss'
import '../sass/applicationModal.scss'

const AboutModal = ({modalActive,setModalActive}) =>{
    return (
        <>
            <div className={ modalActive ?  "active modal" : "modal"} onClick={() => setModalActive(false)}>
                <div className="modal-dialog nodal-info" onClick={e => e.stopPropagation()}>
                    <div className="modal-content modal-height">
                        <div className="modal-body">
                            <h5 className={`form-modal-title`}>ВВЕДИТЕ ВАШИ ДАННЫЕ ДЛЯ ОТКЛИКА НА ВАКАНСИЮ </h5>
                            <form action="">
                                <Accordion className="accordion-position">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        Тип вакансии
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value=""
                                                       id="firstCheckbox"/>
                                                <label className="form-check-label" htmlFor="firstCheckbox">Финансист</label>
                                            </li>
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value=""
                                                       id="secondCheckbox"/>
                                                <label className="form-check-label" htmlFor="secondCheckbox">Бухгалтер</label>
                                            </li>
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value=""
                                                       id="thirdCheckbox"/>
                                                <label className="form-check-label" htmlFor="thirdCheckbox">Оператор колл-центра </label>
                                            </li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>

                                <input className={`modal-form-info modal-absolute form-control`} type="text" placeholder='ФИО'/>
                                <input className={`modal-form-phoneNumber modal-form-info form-control`} type="tel" placeholder='Номер телефона'/>
                                <textarea className={`modal-form-textarea form-control`} name="" id="" cols="30" rows="10" placeholder='Ваш комментарий'></textarea>
                                <div className="d-grid">
                                    <button className={`modal-form-btn btn`}>ОТПРАВИТЬ ЗАЯВКУ</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutModal;
