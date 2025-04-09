import 'boxicons/css/boxicons.min.css';
import './cart.css'
import { useState } from 'react';
import { CartProps } from '../Header/Header';

const Cart = ({ showCart, setShowCart }: CartProps) => {
    const [first, setFirst] = useState(1)
    const [second, setSecond] = useState(1)
    const [third, setThird] = useState(1)

    return (
    <div className={`cart ${showCart ? 'cart--visible' : 'cart--hidden'}`} id="cart">
    <i className='bx bx-x cart__close' id="cart-close" onClick={() => setShowCart(false)}></i>

    <h2 className="cart__title-center">My Cart</h2>

    <div className="cart__container">
        <article className="cart__card">
            <div className="cart__box">
                <img src="/img/featured1.png" alt="" className="cart__img"/>
            </div>

            <div className="cart__details">
                <h3 className="cart__title">Jazzmaster</h3>
                <span className="cart__price">$1050</span>

                <div className="cart__amount">
                    <div className="cart__amount-content">
                        <span className="cart__amount-box">
                            <i className='bx bx-minus' onClick={(() => first > 0 && setFirst(first-1))}></i>
                        </span>

                        <span className="cart__amount-number">{first}</span>

                        <span className="cart__amount-box">
                            <i className='bx bx-plus' onClick={(() => setFirst(first+1))}></i>
                        </span>
                    </div>

                    <i className='bx bx-trash-alt cart__amount-trash' ></i>
                </div>
            </div>
        </article>
        
        <article className="cart__card">
            <div className="cart__box">
                <img src="/img/featured3.png" alt="" className="cart__img"/>
            </div>

            <div className="cart__details">
                <h3 className="cart__title">Rose Gold</h3>
                <span className="cart__price">$850</span>

                <div className="cart__amount">
                    <div className="cart__amount-content">
                        <span className="cart__amount-box">
                            <i className='bx bx-minus' onClick={(() => second > 0 && setSecond(second-1))}></i>
                        </span>

                        <span className="cart__amount-number">{second}</span>

                        <span className="cart__amount-box">
                            <i className='bx bx-plus' onClick={(() => setSecond(second+1))}></i>
                        </span>
                    </div>

                    <i className='bx bx-trash-alt cart__amount-trash' ></i>
                </div>
            </div>
        </article>

        <article className="cart__card">
            <div className="cart__box">
                <img src="/img/new1.png" alt="" className="cart__img"/>
            </div>

            <div className="cart__details">
                <h3 className="cart__title">Longines Rose</h3>
                <span className="cart__price">$980</span>

                <div className="cart__amount">
                    <div className="cart__amount-content">
                        <span className="cart__amount-box">
                            <i className='bx bx-minus' onClick={(() => third > 0 && setThird(third-1))}></i>
                        </span>

                        <span className="cart__amount-number">{third}</span>

                        <span className="cart__amount-box" >
                            <i className='bx bx-plus'onClick={(() => setThird(third+1))} ></i>
                        </span>
                    </div>

                    <i className='bx bx-trash-alt cart__amount-trash' ></i>
                </div>
            </div>
        </article>
    </div>

    <div className="cart__prices">
        <span className="cart__prices-item">{first + second + third} items</span>
        <span className="cart__prices-total">${first * 1050 + second * 850 + third * 980}</span>
    </div>
</div>
  )
}

export default Cart