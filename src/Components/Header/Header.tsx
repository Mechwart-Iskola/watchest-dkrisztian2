import 'boxicons/css/boxicons.min.css';

import Cart from '../Cart/Cart';
import './header.css'
import { useEffect, useState } from 'react';

export type CartProps = {
    showCart: boolean;
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  };


const Header = () => {

  const [isDark, setIsDark] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [isClosed, setIsClosed] = useState(true)

  var body = document.getElementsByTagName("body")[0]
  var menu = document.getElementById("nav-menu");

  useEffect(() => {  
    isDark ? body.classList.add("dark-theme") : body.classList.remove("dark-theme")

    if(menu != undefined){
        menu.style.display = isClosed ? "none" : "flex"
    }
  }, [isClosed, isDark])

  return (
    <>
    <header className="header" id="header">
    <nav >
        <a href="#" className="nav__logo">
            <i className='bx bxs-watch nav__logo-icon'></i> Rolex
        </a>
        <div className="nav__menu"  id="nav-menu">      
            <ul className="nav__list">
                <li className='nav__item'><a className='nav__link' href='#home'>Home</a></li>
                <li className='nav__item'><a className='nav__link' href='#featured'>Featured</a></li>
                <li className='nav__item'><a className='nav__link' href='#products'>Products</a></li>
                <li className='nav__item'><a className='nav__link' href='#new'>New</a></li>
            </ul>
            <div className="nav__close" id="nav-close">
                <i className='bx bx-x' ></i>
            </div>
        </div>
        <div className="nav__btns">           
            <i className='bx bx-moon change-theme' id="theme-button" onClick={(() => setIsDark(!isDark))}></i>
            <div className="nav__shop" id="cart-shop" >
                <i className='bx bx-shopping-bag' onClick={(() => setShowCart(!showCart))}></i>
            </div>
            <div className="nav__toggle" id="nav-toggle" >
                <i className='bx bx-grid-alt' onClick={(() => setIsClosed(!isClosed))}></i>
            </div>
        </div>
    </nav>
</header>
    <Cart showCart={showCart} setShowCart={setShowCart} />
 </>
  )
}

export default Header