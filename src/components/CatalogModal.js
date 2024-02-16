import React, {useState} from 'react';
import catalogModal from '../images/catalog-modal-img.png'
import arrow from "../images/arrow-top-right-large.svg";
import '../sass/catalogModal.scss'
import OrderForm from "./OrderForm";
const CatalogModal = ({active,setActive}) => {
    const [orderModal,setOrderModal] = useState(false)


    return (
        <>
            <div className={active ? "catalog-modal modal activeCatalog" : "catalog-modal modal"} onClick={() => setActive(false)}>
                <div className="catalog-modal-dialog modal-dialog" onClick={e => e.stopPropagation()}>
                    <div className="catalog-modal-content modal-content">
                        <div className="catalog-modal-body modal-body">
                            <div className="catalog-body-img">
                                <img src={catalogModal} alt=""/>
                            </div>
                            <div className="catalog-body-about text-white">
                                <div className="catalog-body-info">
                                    <h4 className="catalog-body-title">
                                        Rimado
                                    </h4>
                                    <p className="catalog-body-subtitle">
                                        Рафинированное вымороженное подсолнечное масло “Rimado” сделано из натуральных семян подсолнечника.
                                    </p>
                                    <div className="catalog-body-subtitle">
                                        Обладает полезными свойствами витамина Е. Прошло 5 этапов очистки. Не обладает запахом, не перебивает вкус продуктов.
                                    </div>
                                    <div className="catalog-body-subtitle">
                                        Обладает полезными свойствами витамина Е. Прошло 5 этапов очистки. Не обладает запахом, не перебивает вкус продуктов.
                                    </div>
                                </div>
                                <div className="catalog-body-btn">
                                    <button className="catalog-body-button btn" onClick={() => {
                                        setOrderModal(true);
                                    }}>ОФОРМИТЬ <br/>ЗАКАЗ <img src={arrow} alt=""/></button>
                                    <div className="catalog-body-term">
                                        <p className="catalog-body-term-title">Срок хранения: 12 месяцев</p>
                                        <div className="catalog-body-term-block">
                                            <p className="catalog-body-term-title d-flex">Без ГМО</p>
                                            <p className="catalog-body-term-title">Без холестерина</p>
                                        </div>
                                    </div>
                                </div>
                                <OrderForm active={orderModal} setActive={setOrderModal}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CatalogModal;