import React, {useState} from 'react';
import '../sass/orderForm.scss'

const OrderForm = ({active,setActive}) => {

    const [ count, setCount] = useState(1)
    return (
        <>
            <div className={active ? "order-modal modal orderActive" : "order-modal modal"} onClick={() => setActive(false)}>
                <div className="order-dialog modal-dialog" onClick={e => e.stopPropagation()}>
                    <div className="order-content modal-content">
                        <div className="order-body modal-body">
                            <div className="basket-about">
                                <h3 className="basket-title">
                                    Rimado
                                </h3>
                                <p className="basket-subtitle">
                                    Рафинированное вымороженное  подсолнечное масло
                                </p>
                                <div className="value">
                                    Объём (л): <span>4,5</span>
                                </div>
                                <div className="amount d-flex">
                                    <h3>Количество:</h3>
                                    <div className="amount-btn d-flex">
                                                  <span onClick={() => {if (count > 1) {
                                                      setCount(count -1)
                                                  }}}>-</span>
                                        <p className="result">{count}</p>
                                        <span  onClick={() => setCount(count + 1)}>+</span>
                                    </div>
                                </div>
                                <input className="input-name form-control" type="text" placeholder="ФИО"/>
                                <input className="input-number form-control" type="tel" placeholder="Номер телефона"/>
                                <input className="input-email form-control" type="email" placeholder="E-mail"/>
                                <div className="d-grid">
                                    <button className="basket-btn btn">ОФОРМИТЬ ЗАКАЗ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderForm;